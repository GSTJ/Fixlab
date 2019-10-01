const URL = "https://www.fixlab.com.br"

module.exports = {
  siteMetadata: {
    title: `Fixlab`,
    description: `Template feito em Gatsby`,
    author: `Gabriel Taveira`,
    siteUrl: URL,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        root: './src',
        aliases: {
          components: "./components",
          images: "./images"
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['PT Sans:400,700', 'Roboto:300,500,700']
        }
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: URL,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
        displayName: false,
        minify: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "www.fixlab.com.br",
        protocol: "https",
        useACF: false,
        verboseOutput: false,
        perPage: 100,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `www.fixlab.com.br`,
              protocol: `https`,
              postTypes: ["post", "page", "category"],
              withWebp: true,
              quality: 100,
              // base64: false,
            }
          }
        ],
        concurrentRequests: 15,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/menus"
        ],
        keepMediaSizes: true
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
        defaultQuality: 100,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fixlab-gatsby`,
        short_name: `fixlab`,
        start_url: `/`,
        background_color: "#3649E2",
        theme_color: "#3649E2",
        display: `minimal-ui`,
        icon: "src/images/app_icon.png"
      }
    },
    `gatsby-plugin-tidy`,
    'gatsby-plugin-css-customs',
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: true,
        host: URL,
        custom: `
        Header set Strict-Transport-Security "max-age=31536000" env=HTTPS
        # BEGIN HMWP_RULES
        <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^([_0-9a-zA-Z-]+/)?site$ /wp-login.php$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?site/(.*) /wp-login.php$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?lostpass$ /wp-login.php?action=lostpassword$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?signup$ /wp-login.php?action=register$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?core/modules/(.*) /wp-content/plugins/$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?core/assets/(.*) /wp-content/themes/$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?storage/(.*) /wp-content/uploads/$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?core/(.*) /wp-content/$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?lib/(.*) /wp-includes/$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?comments/(.*) /wp-comments-post.php$2 [QSA,L]
        RewriteRule ^([_0-9a-zA-Z-]+/)?writer/(.*) /author/$2 [QSA,L]
        </IfModule>
        # END HMWP_RULES

        # BEGIN WordPress
        <IfModule mod_rewrite.c>
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.php$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.php [L]
        </IfModule>
        
        # END WordPress
        #/Bloqueia a listagem de arquivos em suas pastas
        Options All -Indexes
        
        # BEGIN cPanel-generated php ini directives, do not edit
        # Manual editing of this file may result in unexpected behavior.
        # To make changes to this file, use the cPanel MultiPHP INI Editor (Home >> Software >> MultiPHP INI Editor)
        # For more information, read our documentation (https://go.cpanel.net/EA4ModifyINI)
        <IfModule php7_module>
           php_value display errors off 
           php_flag display_errors Off
           php_value max_execution_time 30
           php_value max_input_time 60
           php_value max_input_vars 1000
           php_value memory_limit 256M
           php_value post_max_size 64M
           php_value session.gc_maxlifetime 1440
           php_value session.save_path "/var/cpanel/php/sessions/ea-php56"
           php_value upload_max_filesize 64M
           php_flag zlib.output_compression On
        </IfModule>
        # END cPanel-generated php ini directives, do not edit
        <IfModule mod_deflate.c>
            SetOutputFilter DEFLATE
            <IfModule mod_setenvif.c>
                # Netscape 4.x has some problems...
                BrowserMatch ^Mozilla/4 gzip-only-text/html
                
                # Netscape 4.06-4.08 have some more problems
                BrowserMatch ^Mozilla/4\.0[678] no-gzip
                
                # MSIE masquerades as Netscape, but it is fine
                # BrowserMatch \bMSIE !no-gzip !gzip-only-text/html
                
                # NOTE: Due to a bug in mod_setenvif up to Apache 2.0.48
                # the above regex won't work. You can use the following
                # workaround to get the desired effect:
                BrowserMatch \bMSI[E] !no-gzip !gzip-only-text/html
                
                # Don't compress images
                SetEnvIfNoCase Request_URI .(?:gif|jpe?g|png)$ no-gzip dont-vary
            </IfModule>
            AddType     image/svg+xml              svg svgz
            AddEncoding gzip                       svgz
        
            ## EXPIRES CACHING ##
            <IfModule mod_expires.c>
            ExpiresActive On
            ExpiresByType image/jpg "access 5 month"
            ExpiresByType image/jpeg "access 5 month"
            ExpiresByType image/gif "access 5 month"
            ExpiresByType image/png "access 5 month"
            ExpiresByType text/css "access 1 week"
            ExpiresByType text/html "access 1 day"
            ExpiresByType application/pdf "access 5 month"
            ExpiresByType text/x-javascript "access 5 month"
            ExpiresByType image/x-icon "access 5 month"
            ExpiresByType image/svg+xml "access 5 month"
            ExpiresDefault "access 5 month"
            </IfModule>
            ## EXPIRES CACHING ##
        
            ## FILE COMPRESSION ##
            <ifModule mod_gzip.c>
            mod_gzip_on Yes
            mod_gzip_dechunk Yes
            mod_gzip_item_include file .(html?|txt|css|js|svg|php|pl)$
            mod_gzip_item_include handler ^cgi-script$
            mod_gzip_item_include mime ^text/.*
            mod_gzip_item_include mime ^application/x-javascript.*
            mod_gzip_item_include mime ^image/svg+xml.*
            mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
            </ifModule>
            ## FILE COMPRESSION ##
        
            <IfModule mod_headers.c>
                # Make sure proxies don't deliver the wrong content
                Header append Vary User-Agent env=!dont-vary
            </IfModule>
        </IfModule>
        `
      }
    }
  ],
}
