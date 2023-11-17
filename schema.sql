-- Create the "public" Schema (if it doesn't already exist)
CREATE SCHEMA IF NOT EXISTS public;

-- Create the "simulation_results" Table
CREATE TABLE public.simulation_results (
    simulation_results_id bigserial PRIMARY KEY,
    rule_id bigserial NOT NULL,
    layout_id bigserial NOT NULL,
    max_iterations integer NOT NULL,
    actual_iterations integer NOT NULL,
    created_date timestamp with time zone NOT NULL,
    pass boolean NOT NULL
);

-- Create an Index on the "rule_id" and "layout_id" Columns for Faster Retrievals
CREATE INDEX idx_simulation_results_rule ON public.simulation_results (rule_id);
CREATE INDEX idx_simulation_results_layout ON public.simulation_results (layout_id);

-- Create the "rulesets" Table
CREATE TABLE public.rulesets (
    rule_set_id bigserial PRIMARY KEY
);

-- Create the "layouts" Table
CREATE TABLE public.layouts (
    layout_id bigserial PRIMARY KEY
);
