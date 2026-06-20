-- trigger function (what happens, into where, with?)
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
    insert into public.user_profiles(id, name, account_type)
    value(
        new.id,
        new.raw_user_meta_data ->> 'name'
        new.raw_user_meta_data ->> 'account_type'
    );
    return new; -- row that cause trigger to file
end
$$;