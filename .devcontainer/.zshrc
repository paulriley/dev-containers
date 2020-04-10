export ZSH="/root/.oh-my-zsh"

ZSH_THEME="af-magic"
plugins=(gitfast vscode ssh-agent aws docker)

if [ -f ~/.zsh-hooks ]
then
    source ~/.zsh-hooks
fi

source $ZSH/oh-my-zsh.sh
