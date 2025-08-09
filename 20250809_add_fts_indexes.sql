-- meetings(title)
alter table meetings
  add column if not exists search_tsv tsvector
  generated always as (
    setweight(to_tsvector('simple', coalesce(title,'')), 'A')
  ) stored;
create index if not exists idx_meetings_tsv on meetings using gin(search_tsv);

-- transcripts(content)
alter table transcripts
  add column if not exists search_tsv tsvector
  generated always as (
    setweight(to_tsvector('simple', coalesce(content,'')), 'B')
  ) stored;
create index if not exists idx_transcripts_tsv on transcripts using gin(search_tsv);

-- actions(text, owner)
alter table actions
  add column if not exists search_tsv tsvector
  generated always as (
    setweight(to_tsvector('simple', coalesce(text,'')), 'A') ||
    setweight(to_tsvector('simple', coalesce(owner,'')), 'C')
  ) stored;
create index if not exists idx_actions_tsv on actions using gin(search_tsv);
