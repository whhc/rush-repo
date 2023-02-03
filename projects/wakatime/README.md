# Desc

## Project Architecture

src
|-- api => API Layer
|-- assets
--|-- fonts
--|-- images
|-- components
|-- common
--|-- NewsletterForm
----|-- hooks => Not really resuable
------|-- useNewsletterSignup.ts
----|-- NewsletterForm.tsx
--|-- button
----|-- Button.tsx
--|-- transitions
|-- hooks => Reusable hooks
|-- context => Global-level context state providers
|-- layout
|-- config
|-- constants
|-- helpers => Any utilities and small resuable functions as functions to format date, time, etc
|-- intl => I18n
|-- services => Complex business logic code
|-- store => Global state management
|-- styles
|-- types
|-- views

## layout

dashboard - duration, projects

sync Update gist data to sql

## Backend

static http
api
sql
