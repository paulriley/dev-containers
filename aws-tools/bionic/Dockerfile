FROM sittingonthedock/zsh-shell:bionic

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get -y upgrade \
    # locales - must match ENV variables at the top of this script
    # Add repositories:
    #   Docker
    && curl -fsSL https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/gpg | (OUT=$(apt-key add - 2>&1) || echo $OUT) \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]') $(lsb_release -cs) stable" \
    # Update new repos
    && apt-get update \
    # Install Docker CLI
    && apt-get install -y docker-ce-cli \
    # Install Docker Compose CLI
    && pip3 install wheel \
    && pip3 install docker-compose \
    # Install AWS CLI & Templates
    && pip3 install awscli \
    && pip3 install awscli-local \
    # Terraform
    && wget https://releases.hashicorp.com/terraform/0.12.21/terraform_0.12.21_linux_amd64.zip \
    && unzip terraform_0.12.21_linux_amd64.zip \
    && mv terraform /usr/local/bin/ \
    && rm -rf terraform* \
    # Cleanup
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ADD .post-create.sh /root/
ADD .zshrc /root/

ENV DEBIAN_FRONTEND=

ENTRYPOINT [ "sleep", "infinity" ]