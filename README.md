# Goto-FrontEnd

# Dev Machine Setup
- Dependencies
 - oh-my-zsh `sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`
 - zsh-nvm
   - `git clone https://github.com/lukechilds/zsh-nvm ~/.oh-my-zsh/custom/plugins/zsh-nvm`
   - Add `zsh-nvm` as the first plugin in the `~/.zshrc` plugins list
   - Add `nvm use default` to the bottom of `~/.zshrc`
 - nvm `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`
 - node/npm `nvm install --lts`
 - @angular/cli `npm install -g @angular/cli`
 - sass-list `npm install -g sass-lint`
 - Atom Packages
   - atom-beautify
   - atom-ide-ui
   - atom-typescript
   - ide-css
   - linter-cass-lint
   - sort-lines
- If you run into an issue where ng serve does not detect file system changes, you may need to run this, (lost on reboot)
  - `sudo sysctl fs.inotify.max_user_watches=524288`
  - `sudo sysctl -p --system`
  - To make persistent: `echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
