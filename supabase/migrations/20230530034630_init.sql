create table users (
  id uuid references auth.users not null primary key,
  full_name text,
  avatar_url text,
  college text,
  branch text
);
alter table users enable row level security;
create policy "Can view own user data." on users for select using (auth.uid() = id);
create policy "Can update own user data." on users for update using (auth.uid() = id);

create function public.handle_new_user() 
returns trigger as $$
begin
  insert into public.users (id, full_name, avatar_url, college, branch)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'college', new.raw_user_meta_data->>'branch');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();