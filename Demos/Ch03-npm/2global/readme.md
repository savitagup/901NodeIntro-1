# Chapter 3 Practice with NPM global

## Objectives:
* You will use NPM to install packages globally.

## Steps

1. Navigate to a command window any location, because we are talking about global installs. You can use the shortcut control + ` to bring up the integrated terminal.

1. Use the `npm ls -g` command to see what has already been installed globally. Scroll through the file to get a sense of the structure.

1. The first entry is a package called `knex`. Knex allows your projects to connect to databases. You really should only install globally tools which your projects don’t depend on.  

1. You can also run this command to see if something in particular is installed globally.

    ``` npm -g ls knex ```

1. Remove the knex from being available globally by using this command:
    ``` npm -g rm knex ```

    an alternative command is:
    ``` npm -g uninstall knex ```


1. Hit the up arrows to go back and try to list the global entry from knex - it should now be gone (listed as -- (empty))


