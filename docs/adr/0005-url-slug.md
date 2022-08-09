# 5. url-slug

Date: 2022-07-16

## Status

2022-07-16 Accepted

## Context

Currently, the url slug is very long and rigid. For example, there are

```
/garden/article-1

/project/article-2

library/article-3
```

Initially it makes sense to separate content based on category and it prevents cases of duplicate slug path. However, it makes the path unnecessarily long and hurts SEO.

**Should we modify all url paths to be more memorable? How do we avoid breaking existing url paths?**

## Decision

### Remove category from url path

```
/garden/article-1   -> /article-1

/project/article-2  -> /article-2

library/article-3   -> /article-3
```

### Concerns

Since old url paths have been live for a while on Google and other social media, these paths should not break. Redirection from old paths is a must.

## Consequences

- Longer build time to render the redirect paths
