FROM sittingonthedock/vscode-components-basic-tools

COPY --from=sittingonthedock/vscode-components-dotnet-extract:3.1 /tmp/extract/dotnet /usr/share/dotnet
COPY --from=sittingonthedock/vscode-components-terraform-extract:0.12 /tmp/extract/terraform /usr/share/terraform 

# Install Docker Compose CLI
RUN pip3 install wheel \
    && pip3 install docker-compose \
    # Install AWS CLI & Templates
    && pip3 install awscli \
    && pip3 install awscli-local \
    && ln -s /usr/share/terraform/bin/terraform /usr/bin/terraform \
    && ln -s /usr/share/dotnet/dotnet /usr/bin/dotnet \
    && dotnet help
