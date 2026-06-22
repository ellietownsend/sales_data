import { useEffect, useState } from 'react';
import supabase from "../../supabase-client";
import { Chart } from 'react-charts'
import Form from '../components/Form';
import './dashboard.css';

function Dashboard() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchMetrics();


    const channel = supabase
      .channel('deal-changes')
      .on(
        'postgres_changes',
        { 
          event: '*', 
          schema: 'public', 
          table: 'sales_deals' 
        },
        payload => {
          console.log(payload);
          fetchMetrics();
        })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);


  async function fetchMetrics() {
    try {
      const { data, error } = await supabase
        .from('sales_deals')
        .select(
          `
          value.sum(),
          ...user_profiles!inner(
            name
          )
          `,
        );
      if (error) {
        throw error;
      }
      console.log("Fetched metrics:", data);
      setMetrics(data);
    } catch (error) {
      console.error('Error fetching metrics:', error.message);
    }
  }

  const chartData = [
    {
      data: metrics.map((m) => ({
        primary: m.name,
        secondary: m.sum,
      })),
    },
  ];

  const primaryAxis = {
    getValue: (d) => d.primary,
    scaleType: 'band',
    padding: 0.3,
    position: 'bottom',
    style: {
        tick: {
          fill: '#6b7a6d',
          fontSize: 12
        },
        axis: {
          stroke: 'transparent'
        }
  }
  };

  function y_max() {
    if (metrics.length > 0) {
      const maxSum = Math.max(...metrics.map((m) => m.sum));
      return maxSum + 2000;
    };
    return 5000;
  };

  const secondaryAxes = [
    {
      getValue: (d) => d.secondary,
      scaleType: 'linear',
      min: 0,
      max: y_max(),
      style: {
      tick: {
        fill: '#6b7a6d',
        fontSize: 12
      },
      grid: {
        stroke: 'rgba(0,0,0,0.05)',
        strokeDasharray: '4 4'
      },
      axis: {
        stroke: 'transparent'
      }
    }
  }
  ];

  return (
    <>
    <div
      className="dashboard-wrapper"
      role="region"
      aria-label="Sales dashboard"
    >
      <div
        className="chart-container"
        role="region"
        aria-label="Sales chart and data"
      >
        <h2>Total Sales This Quarter ($)</h2>
        <div style={{ flex: 1 }}>
          <Chart
            options={{
              data: chartData,
              primaryAxis,
              secondaryAxes,
              type: 'bar',

              defaultColors: [
                '#10b981',
                '#059669',
                '#047857'
              ],

              tooltip: {
                show: true,
              },

              primaryCursor: false,
              secondaryCursor: false,
            }}
          />
        </div>
      </div>
    </div>
      <Form />
      </>
  );
};

export default Dashboard;