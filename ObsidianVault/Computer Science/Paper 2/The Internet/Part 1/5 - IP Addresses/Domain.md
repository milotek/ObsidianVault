
A domain name is a human-readable address used to access websites on the internet. Instead of using an IP address (which is a string of numbers), domain names provide an easier way to remember and navigate to websites.

For example:
- **Domain Name**: `example.com`
- The underlying **IP Address**: `192.0.2.1`


> [!TL:DR] Too Long Didn't Read
> Domains effectively just redirect users to an [[IP Address|IP address]], but the reason they are used is because they are infinitely more readable and memorable than ugly IPv4 addresses.

---
## Structure of a Domain Name

A domain name consists of several parts, separated by periods (`.`), with each part representing a level in the domain hierarchy.

Example:  `www.example.com`

1. **Subdomain** (`www`)
	- A prefix that can be used to organise or identify specific sections of a website.
	- Not all domains have subdomains
	- They can be customised (e.g., `blog.example.com`).
  
2. **Second-Level Domain (SLD)** (`example`):
	- This is the main part of the domain name
	- Typically represents the brand, business, or individual.

4. **Top-Level Domain (TLD)** (`.com`)
	- The suffix that represents the highest level in the domain hierarchy. Common TLDs include `.com`, `.org`, `.net`, and many others.


> [!WARNING]  Don't get a domain name confused with a [[URLs|URL]]!
> - The **domain** only contains the `www.XXXXX.com`.
> - **URLs** have the protocol (ex: `https://...`) and subdirectories (ex: `.../home/following)


![[Pasted image 20241003142641.png]]

---
## Types of Top-Level Domains (TLDs)

1. **Generic TLDs (gTLDs)**: These are the most common and familiar domain extensions. Examples include:
   - `.com` (commercial)
   - `.org` (organization)
   - `.net` (network)
   - `.edu` (education)
   - `.gov` (government)

2. **Country Code TLDs (ccTLDs)**: These are two-letter domains specific to a country or geographic location.
   - `.uk` (United Kingdom)
   - `.de` (Germany)
   - `.jp` (Japan)

3. **New gTLDs**: In recent years, a variety of new domain extensions have been created, such as `.shop`, `.tech`, `.online`, and more.

-----
## Internet registries 
Internet registries, **not to be confused with [[Domains#Domain **registrars**|domain registrars]]** manage the allocation of IP addresses and domain names, to ensure global uniqueness and efficiency. They:

- **Allocate IP addresses**: Distribute IPv4 and IPv6 addresses to ISPs and organizations regionally, preventing duplication and ensuring efficient usage.
- **Manage domain names**: Coordinate the registration and maintenance of domain names in collaboration with ICANN.
- **Develop policies**: Create policies to manage resource distribution, address exhaustion, and network security.
- **Maintain WHOIS databases**: Keep public directories of IP addresses and domain name ownership.
- **Support global connectivity**: Ensure stable, scalable, and reliable Internet infrastructure.

-----
## Domain **registrars**
#### Registering a domain
To register a domain, follow these steps:
1. Choose a domain registrar (e.g., GoDaddy, Namecheap, Google Domains).
2. Search for your desired domain name to see if it’s available.
3. Purchase the domain and register it in your name.

#### Domain ownership + renewal
When you register a domain, you don’t "own" it forever; you’re essentially leasing it for a period of time (typically one year). You need to renew the registration periodically to maintain ownership.

-----
## Domain Name System (DNS)
The Domain Name System (DNS) is what translates domain names into IP addresses, allowing users to access websites using readable names rather than numerical addresses.

When you enter a domain name (like `example.com`) in your browser, DNS resolves it to the corresponding IP address of the server hosting the website.

### DNS Records
DNS records contain the information that tells the DNS how to handle a domain's traffic. Common types of DNS records include:

- **A Record**: Maps *(redirects)* a domain to an IPv4 address.
- **AAAA Record**: Maps a domain to an IPv6 address.
- **CNAME Record**: Aliases one domain name to another.
- **MX Record**: Directs email to the correct mail servers for the domain.

-----
## Subdomains
A **subdomain** is a part of the domain that allows the creation of more specific addresses without registering a new domain.

**Example:**
- Main Domain: `example.com`
- Subdomain: `blog.example.com`

Subdomains can be used for organizing different sections of a site, like `store.example.com` for a shop and `support.example.com` for customer service.

---
## Domain Privacy

When you register a domain, your contact information (such as your name, address, and email) is stored in a public database known as WHOIS. To protect your personal information, domain registrars offer **domain privacy** services that mask this data.

-----