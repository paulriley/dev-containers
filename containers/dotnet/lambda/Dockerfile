FROM sittingonthedock/vscode-components-basic-tools:1.0

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        # .NET Core requirements
        libc6 \
        libgcc1 \
        libgcc-s1 \
        libgssapi-krb5-2 \
        libssl1.1 \
        libstdc++6 \
        libicu66 \
        zlib1g \
    # Cleanup, to keep interim container small
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

COPY --from=sittingonthedock/vscode-components-dotnet-extract /tmp/extract/dotnet /usr/share/dotnet
COPY --from=sittingonthedock/vscode-components-terraform-extract /tmp/extract/terraform /usr/share/terraform 

# Install Docker Compose CLI
RUN pip3 install wheel \
    && pip3 install docker-compose \
    # Install AWS CLI & Templates
    && pip3 install awscli \
    && pip3 install awscli-local \
    && ln -s /usr/share/terraform/bin/terraform /usr/bin/terraform \
    && ln -s /usr/share/dotnet/dotnet /usr/bin/dotnet \
    && dotnet new -i Amazon.Lambda.Templates
