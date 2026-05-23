<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:local="http://www.google.com/schemas/sitemap-local/1.0"
  exclude-result-prefixes="sitemap local">
  
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  
  <xsl:template match="/">
    <html lang="pt-BR">
      <head>
        <title>Sitemap XML - Betoneira Osasco</title>
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #fff;
            padding: 0;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            overflow: hidden;
            border: 1px solid #e1e4e6;
          }
          .header {
            background-color: #2b6cb0;
            color: #fff;
            padding: 20px 24px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
          }
          .header p {
            margin: 8px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
          }
          .content {
            padding: 24px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
            margin-top: 10px;
          }
          th {
            background-color: #edf2f7;
            color: #4a5568;
            font-weight: 600;
            font-size: 14px;
            text-transform: uppercase;
            padding: 12px 16px;
            border-bottom: 2px solid #cbd5e0;
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 14px;
            word-break: break-all;
          }
          tr:hover td {
            background-color: #f7fafc;
          }
          a {
            color: #2b6cb0;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
          .footer-info {
            margin-top: 20px;
            font-size: 12px;
            color: #718096;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header -->
          <div class="header">
            <h1>Sitemap XML</h1>
            <p>Gerado dinamicamente para indexação no portal Betoneira Osasco.</p>
          </div>
          
          <div class="content">
            <!-- Checking for Sitemap Index -->
            <xsl:choose>
              <xsl:when test="sitemap:sitemapindex">
                <table>
                  <thead>
                    <tr>
                      <th style="width: 70%;">Sitemap</th>
                      <th style="width: 30%;">Última Modificação</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                      <tr>
                        <td>
                          <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                        </td>
                        <td>
                          <xsl:value-of select="sitemap:lastmod"/>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:when>
              
              <!-- Checking for Local Sitemap (custom namespace or marker) -->
              <xsl:when test="sitemap:urlset/sitemap:url/local:location">
                <table>
                  <thead>
                    <tr>
                      <th style="width: 25%;">Nome</th>
                      <th style="width: 25%;">Endereço</th>
                      <th style="width: 20%;">Número de telefone</th>
                      <th style="width: 15%;">Latitude</th>
                      <th style="width: 15%;">Longitude</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                      <tr>
                        <td>
                          <a href="{sitemap:loc}"><xsl:value-of select="local:location/local:name"/></a>
                        </td>
                        <td>
                          <!-- Left empty intentionally as requested ("sem endereço") -->
                          <xsl:value-of select="local:location/local:address"/>
                        </td>
                        <td>
                          <xsl:value-of select="local:location/local:telephone"/>
                        </td>
                        <td>
                          <xsl:value-of select="local:location/local:latitude"/>
                        </td>
                        <td>
                          <xsl:value-of select="local:location/local:longitude"/>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:when>
              
              <!-- Standard URL Set (Pages & Posts) -->
              <xsl:otherwise>
                <table>
                  <thead>
                    <tr>
                      <th style="width: 60%;">URL</th>
                      <th style="width: 15%;">Prioridade</th>
                      <th style="width: 15%;">Frequência</th>
                      <th style="width: 10%;">Modificado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <xsl:for-each select="sitemap:urlset/sitemap:url">
                      <tr>
                        <td>
                          <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                        </td>
                        <td>
                          <xsl:value-of select="sitemap:priority"/>
                        </td>
                        <td>
                          <xsl:value-of select="sitemap:changefreq"/>
                        </td>
                        <td>
                          <xsl:value-of select="sitemap:lastmod"/>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </tbody>
                </table>
              </xsl:otherwise>
            </xsl:choose>
          </div>
        </div>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
