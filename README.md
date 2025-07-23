## Components

- present in components folder
- represent an html component like navbar, footer, faqs etc - reusable
- their json schema present in docs folder

## Layouts

- present in layouts folder
- wrappers around a content, reusable
- to be used with markdown files to create separate pages
- created html has same name like the md file
- data can be in frontmatter like metadata
- content is handled differently which is the markdown content

## Strategy

- use reusable components like cta, faqs etc
- for content heavy components use AI
- prompts present in prompt folder
- change colors and add animations manually

## Content folder

- content folder is for template based content like services, blogs etc
- change the name of the folder accordingly.
- contains content in markdown format
- content.njk -> is the template used

## Add project to CF pages

- login
- click on +Add on top right
- click on Pages
- Import an existing Git repository
- select repository
- Build command -> npm run build
- Build output directory -> public

## Add custom domain in CF pages

- on left side navigation click on Compute (Workers) -> Workers & Pages
- click on the project name
- Go to Custom Domains
- click on Setup a custom domain
- enter domain name
- click on Begin DNS transfer
- again enter domain name
- select Free Plan
- click on Continue to Activation

### configure nameservers in godaddy

- go to domain in godaddy
- DNS -> Nameservers
- click on Change Nameservers
- Add from cloudflare from previous step and save
- wait for mail from cloudflare

### domain activation

- go to Compute (Workers) -> Workers & Pages -> project name -> Custom Domains
- click on setup a custom domain, enter domain name
- click on Activate Domain

### 522 error when using www route

- go to dashboard in cloudflare pages
- on left side navigation click on Bulk Redirects
- click on Create Bulk Redirect list
- give some name
- click on manually add url redirects
- add source url example - www.webnami.in
- add target url example - https://webnami.in
- click on edit parameters and select all
- click on next
- click on Continue to Redirect Rules
- give a name (example - www to root), select the list

Follow below rules if CNAME with www doesnt exist

- go to dashboard
- click on domain name
- click on DNS on left side panel
- click on Add record
- add a new record - type=A, name=www, IP4v=192.0.2.1
- save

## Submit sitemap to google search console

- go to google search console
- enter site in URL Prefix and click Continue
- verify using multiple options
- after verification click on Go To Property
- On left hand panel click on Sitemaps
- submit your sitemap

## Submit sitemap to bing webmaster

- go to https://www.bing.com/webmasters/about
- sign in with google
- Import from google search console
- do all steps
