FROM sittingonthedock/vscode-components-basic-tools:1.0

ENV DEBIAN_FRONTEND=noninteractive

RUN wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb \
    && rm packages-microsoft-prod.deb \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        dotnet-sdk-3.1 \
    # Cleanup, to keep interim container small
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

COPY --from=sittingonthedock/vscode-components-terraform-extract /tmp/extract/terraform /usr/share/terraform 

# Install Docker Compose CLI
RUN pip3 install wheel \
    && pip3 install docker-compose \
    # Install AWS CLI & Templates
    && pip3 install awscli \
    && pip3 install awscli-local \
    && ln -s /usr/share/terraform/bin/terraform /usr/bin/terraform \
    && dotnet help

ENV DEBIAN_FRONTEND=