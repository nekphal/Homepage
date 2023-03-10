# Personal Homepage
Just a standard "link tree" for all my self-hosted services. Feel free to modify my landing page and use it yourself!<br>
Some Github repositories of the services I use:
- [Nextcloud](https://github.com/nextcloud/docker)
- [Plex](https://github.com/linuxserver/docker-plex)
- [Jellyfin](https://github.com/linuxserver/docker-jellyfin)
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden)
- [Paperless](https://github.com/paperless-ngx/paperless-ngx)
- [Uptime Kuma](https://github.com/louislam/uptime-kuma)
- [Wireguard UI](https://github.com/ngoduykhanh/wireguard-ui)
- [Nginx Proxy Manager](https://github.com/NginxProxyManager/nginx-proxy-manager)

## Usage with docker

### docker cli
build image

```bash
docker build -t homepage .
```

start container

```bash
docker run -d -p:80:80 homepage
```

### docker-compose

```yaml
version: '3.7'
services:
  homepage:
    build: ./ # path to git repository
    restart: unless-stopped
    ports:
      - 80
```

<br><br>
> **_SVG-Icons:_**  [Font Awesome](https://fontawesome.com/)