---
title: Useful git commands for developers
date: "2024-03-14T21:47:00.000Z"
description: Advanced approaches and git commands that will be useful for developers
---

Sources for article:
- [Git - Reference](https://git-scm.com/docs)

`git` is one of the most important parts of a developer's tools, but some of its features are not well known to most developers.

In this article, I want to show some advanced approaches and interest techniques that could help with resolving bugs, improving the working process, etc.

## `git bisect` for debugging

`git bisect` is a debugging tool that will help you find when a bug was created in your commit's history. To start using this tool, you need to have a bad commit (in which a bug was found) and a good commit (in which you don't have this bug). By using binary search bisect will try to find which commit was the initiator of this problem.

Example:

I have found a bug, that fully crashes my app after loading the web page. For founding this bug, I could use `git bisect`:

```
git bisect start

git bisect bad # or git bisect bad <rev>
git bisect good v1.0.0
```

As a rev you could use a version or commit hash.

Now after each message from `git bisect`, you will need to check if you can reproduce the bug. If you can then answer, `git bisect bad` or `git bisect good` otherwise.

In the end you will get the revision that created this bug.

You could use `git bisect log` for checking logs; this could be helpful if you forget where you stopped.

![Visual scheme of using git bisect](./git-bisect.drawio.png)
