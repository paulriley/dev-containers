#! /bin/bash

if [ -d /root/.ssh-localhost ]
then
    echo "Copying local ssh keys to container"
    mkdir -p /root/.ssh
    cp -r /root/.ssh-localhost/* /root/.ssh
    chmod 700 /root/.ssh && chmod 600 /root/.ssh/*
fi

if [ -f /root/.zshrc-localhost ]
then
    echo "Copying local .zshrc to container"
    rm /root/.zshrc
    cp /root/.zshrc-localhost /root/.zshrc
fi

if [ -f /root/.post-create-hook.sh ]
then
    echo "Executing post create hook"
    . /root/.post-create-hook.sh
fi