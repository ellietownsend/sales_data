import { useActionState } from 'react';
import supabase from '../../supabase-client';

function Form({ metrics }) {
  const [error, submitAction, isPending] = useActionState(
  async (_, formData) => {
    const newDeal = {
      name: formData.get('name'),
      value: Number(formData.get('value')),
    };

    const { data: deal, error: fetchError } = await supabase
      .from('sales_deals')
      .select('value')
      .eq('name', newDeal.name)
      .single();

    if (fetchError) {
      console.error('Fetch error:', fetchError.message);
      return new Error('Failed to fetch deal');
    }

    const { error: updateError } = await supabase
      .from('sales_deals')
      .update({
        value: deal.value + newDeal.value,
      })
      .eq('name', newDeal.name);

    if (updateError) {
      console.error('Update error:', updateError.message);
      return new Error(updateError.message);
    }

    return null;
  },
  null
);

  const generateOptions = () => {
    return metrics.map((metric) => (
      <option key={metric.name} value={metric.name}>
        {metric.name}
      </option>
    ));
  };

  return (
    <div className="add-form-container">
      <form
        action={submitAction}
        aria-label="Add new sales deal"
        aria-describedby="form-description"
      >
        <div id="form-description" className="sr-only">
          Use this form to add a new sales deal. Select a sales rep and enter
          the amount.
        </div>

        <label htmlFor="deal-name">
          Name:
          <select
            id="deal-name"
            name="name"
            defaultValue={metrics?.[0]?.name || ''}
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            disabled={isPending}
          >
            {generateOptions()}
          </select>
        </label>

        <label htmlFor="deal-value">
          Amount: $
          <input
            id="deal-value"
            type="number"
            name="value"
            defaultValue={0}
            className="amount-input"
            min="0"
            step="10"
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-label="Deal amount in dollars"
            disabled={isPending}
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? 'Adding...' : "Add Deal"}
        </button>
      </form>

      {error && (
        <div role='alert' className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Form;