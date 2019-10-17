export ZSH="/root/.oh-my-zsh"

ZSH_THEME="af-magic"
plugins=(git vscode ssh-agent)

if [ -f ~/.zsh-add-identities ]
then
    source ~/.zsh-add-identities
fi

source $ZSH/oh-my-zsh.sh
