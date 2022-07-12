# Github

- Add setting rules for proctecting the branches.
- Add Github Actions & PR Checklist template.
- In order to generate draft release automatically, don't forget create the first release.
- Install this [VS Code extension](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) so that making easier for code review.

# ClickUp

## Configuration

Config the ClickUp & Github (should have permission to access the integration in Clickup) following this [article](https://docs.clickup.com/en/articles/856285-github).

## Custom Automation

This action will only occur if the pull request is linked to a ClickUp Task.

Find out more [here](https://docs.clickup.com/en/articles/4188427-github-automations)

# Mattermost plugin for Github

Install this [plugin](https://github.com/mattermost/mattermost-plugin-github) (Sysadmin only)

Run the following command in any Mattermost chatbox to enable the Github notification toolbar.

```sh

# grant access to your Github account.
/github connect private

# Subsribe to the repository you're working on.
/github subscriptions add Code-Engine-Studio/ces-juggle-fish-attributes issues,issue_comments,pulls,label:"urgent"

# List the subscripted repositories
/github subscriptions list

```

NOTE: You should watch the repository to get further more notification.

# Verifying Commit Message

There are two way to install:

- Using NPM

- Update Git hooks directly

## Using NPM

```sh
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}
# For Windows:
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

To lint commits before they are created you can use Husky's `commit-msg` hook:

```sh
# Install Husky v6
npm install husky --save-dev
# or
yarn add husky --dev

# Activate hooks
npx husky install
# or
yarn husky install

# Add hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

Find out more [here](https://commitlint.js.org/#/guides-local-setup)

## Git hooks

To install commit lint for your project please copy the file named [`install.commitlint.sh`](./install.commitlint.sh) to your project folder, then run it.
