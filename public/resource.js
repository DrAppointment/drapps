



<!DOCTYPE html>
<html lang="en" class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>angular.js/resource.js at master · angular/angular.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular/angular.js" name="twitter:title" /><meta content="angular.js - HTML enhanced for web apps" name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/139426?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/139426?v=2&amp;s=400" property="og:image" /><meta content="angular/angular.js" property="og:title" /><meta content="https://github.com/angular/angular.js" property="og:url" /><meta content="angular.js - HTML enhanced for web apps" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CB63D312:4A6D:1E1BBC4B:53F8222A" name="octolytics-dimension-request_id" /><meta content="8512839" name="octolytics-actor-id" /><meta content="DrAppointment" name="octolytics-actor-login" /><meta content="a09609da6c62c872f571e38881c848183bc139661a9b4f24feb0131b3b0b1721" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="pmz6x2T5QTnLpDCuvsJJNKm14xMAY/iZth+vqFcHoIhGk4fKROJMG2gIAZTcn5LTgtfXniMl0LXcTSvefoLUnw==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-21576b23255b09a790d9dfda34985ede413e9c1a.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-62138d451dd23e68a8d072db2308be042ed3b2ca.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="a7d934a0e42f3f3fadbc6596a8b9372d">

      
  <meta name="description" content="angular.js - HTML enhanced for web apps">
  <meta name="go-import" content="github.com/angular/angular.js git https://github.com/angular/angular.js.git">

  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="460078" name="octolytics-dimension-repository_id" /><meta content="angular/angular.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="460078" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/angular.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular/angular.js/commits/master.atom" rel="alternate" title="Recent Commits to angular.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search">
          <form accept-charset="UTF-8" action="/angular/angular.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/angular/angular.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left">
        <li class="header-nav-item explore" data-ga-click="Header, go to explore, text:explore">
          <a class="header-nav-link" href="/explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/DrAppointment" data-ga-click="Header, go to profile, text:username">
      <img alt="DrAppointment" class="avatar" data-user="8512839" height="20" src="https://avatars2.githubusercontent.com/u/8512839?v=2&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">DrAppointment</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="angular/angular.js">This repository</span>
    </li>
      <li>
        <a href="/angular/angular.js/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UoRJRESJokuWs5mqH4meK9+NVIfEHYhMibtLP9KouvHBpppGO7nMhDJIGMJL6WCTBF26kQVVCKJE5QniWrlAxQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="EmIKJHhpcCdrUyfGFAPjHkWScXSr0qFzWWfqQ7qda3dW3UzSiqEPMRnU8vKstDuqz3mAHd9rvqnUnRDAPbutUg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="460078" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/angular/angular.js/watchers">
        2,730
      </a>
      <a href="/angular/angular.js/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/angular/angular.js/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oVrCyKiuESVyavMiqfFBopVbRrlVKhzfOkfNEGnjryJwGdvSwljWcIGX01hrgoBIc96wbPN4zyrAU5kdH0QNyg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar angular/angular.js">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/angular/angular.js/stargazers">
          27,628
        </a>
</form>
    <form accept-charset="UTF-8" action="/angular/angular.js/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="aS1KnD9X81TtuB2l/J+vT/XdSfcYUokCSvt/DKkmdImP1gdgJv0KMzSt9P4//2j2ckJiMbH8L5aOmva6NjRBkg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star angular/angular.js">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/angular/angular.js/stargazers">
          27,628
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/angular/angular.js/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of angular/angular.js to your account" aria-label="Fork your own copy of angular/angular.js to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/angular/angular.js/network" class="social-count">10,080</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/angular" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/angular/angular.js" class="js-current-repository js-repo-home-link">angular.js</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/angular/angular.js/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/angular/angular.js" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /angular/angular.js">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/angular/angular.js/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /angular/angular.js/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/angular/angular.js/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /angular/angular.js/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/angular/angular.js/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /angular/angular.js/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/angular/angular.js/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /angular/angular.js/pulse/weekly">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/angular/angular.js/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /angular/angular.js/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/angular/angular.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/angular.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:angular/angular.js.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:angular/angular.js.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/angular/angular.js" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/angular.js" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/angular/angular.js" class="minibutton sidebar-button" title="Save angular/angular.js to your computer and use it in GitHub Desktop." aria-label="Save angular/angular.js to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/angular/angular.js/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download angular/angular.js as a zip file"
                   title="Download angular/angular.js as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/angular/angular.js/blob/fc8d6d75ab899870499d7ff740c717c3ce643423/src/ngResource/resource.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:a1d30c664501eef57fd96b8333317825 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/even-more-perf-rebased/src/ngResource/resource.js"
                 data-name="even-more-perf-rebased"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="even-more-perf-rebased">even-more-perf-rebased</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/g3_v1_0/src/ngResource/resource.js"
                 data-name="g3_v1_0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="g3_v1_0">g3_v1_0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/g3_v1_2/src/ngResource/resource.js"
                 data-name="g3_v1_2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="g3_v1_2">g3_v1_2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/g3_v1_3/src/ngResource/resource.js"
                 data-name="g3_v1_3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="g3_v1_3">g3_v1_3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/master/src/ngResource/resource.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/ng_message/src/ngResource/resource.js"
                 data-name="ng_message"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="ng_message">ng_message</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/travis-jqlite-iframe-test-timeout/src/ngResource/resource.js"
                 data-name="travis-jqlite-iframe-test-timeout"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="travis-jqlite-iframe-test-timeout">travis-jqlite-iframe-test-timeout</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/update-sauceconnect-to-v4/src/ngResource/resource.js"
                 data-name="update-sauceconnect-to-v4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="update-sauceconnect-to-v4">update-sauceconnect-to-v4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/v0.9.x/src/ngResource/resource.js"
                 data-name="v0.9.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.x">v0.9.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/v1.0.x/src/ngResource/resource.js"
                 data-name="v1.0.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.x">v1.0.x</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/blob/v1.2.x/src/ngResource/resource.js"
                 data-name="v1.2.x"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.x">v1.2.x</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.19/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.19">v1.3.0-beta.19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.18/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.18">v1.3.0-beta.18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.17/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.17">v1.3.0-beta.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.16/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.16">v1.3.0-beta.16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.15/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.15">v1.3.0-beta.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.14/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.14">v1.3.0-beta.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.13/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.13">v1.3.0-beta.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.12/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.12">v1.3.0-beta.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.11/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.11">v1.3.0-beta.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.10/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.10">v1.3.0-beta.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.9/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.9">v1.3.0-beta.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.8/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.8">v1.3.0-beta.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.7/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.7">v1.3.0-beta.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.6/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.6">v1.3.0-beta.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.5/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.5">v1.3.0-beta.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.4/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.4">v1.3.0-beta.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.3/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.3">v1.3.0-beta.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.2/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.2">v1.3.0-beta.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.3.0-beta.1/src/ngResource/resource.js"
                 data-name="v1.3.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.3.0-beta.1">v1.3.0-beta.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.23/src/ngResource/resource.js"
                 data-name="v1.2.23"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.23">v1.2.23</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.22/src/ngResource/resource.js"
                 data-name="v1.2.22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.22">v1.2.22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.21/src/ngResource/resource.js"
                 data-name="v1.2.21"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.21">v1.2.21</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.20/src/ngResource/resource.js"
                 data-name="v1.2.20"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.20">v1.2.20</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.19/src/ngResource/resource.js"
                 data-name="v1.2.19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.19">v1.2.19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.18/src/ngResource/resource.js"
                 data-name="v1.2.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.18">v1.2.18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.17/src/ngResource/resource.js"
                 data-name="v1.2.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.17">v1.2.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.16/src/ngResource/resource.js"
                 data-name="v1.2.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.16">v1.2.16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.15/src/ngResource/resource.js"
                 data-name="v1.2.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.15">v1.2.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.14/src/ngResource/resource.js"
                 data-name="v1.2.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.14">v1.2.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.13/src/ngResource/resource.js"
                 data-name="v1.2.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.13">v1.2.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.12/src/ngResource/resource.js"
                 data-name="v1.2.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.12">v1.2.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.11/src/ngResource/resource.js"
                 data-name="v1.2.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.11">v1.2.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.10/src/ngResource/resource.js"
                 data-name="v1.2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.10">v1.2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.9/src/ngResource/resource.js"
                 data-name="v1.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.9">v1.2.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.8/src/ngResource/resource.js"
                 data-name="v1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.8">v1.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.7/src/ngResource/resource.js"
                 data-name="v1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.7">v1.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.6/src/ngResource/resource.js"
                 data-name="v1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.6">v1.2.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.5/src/ngResource/resource.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.4/src/ngResource/resource.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.3/src/ngResource/resource.js"
                 data-name="v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.3">v1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.2/src/ngResource/resource.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.1/src/ngResource/resource.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0-rc.3/src/ngResource/resource.js"
                 data-name="v1.2.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0-rc.3">v1.2.0-rc.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0-rc.2/src/ngResource/resource.js"
                 data-name="v1.2.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0-rc.2">v1.2.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0rc1/src/ngResource/resource.js"
                 data-name="v1.2.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0rc1">v1.2.0rc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.2.0/src/ngResource/resource.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.5/src/ngResource/resource.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.4/src/ngResource/resource.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.3/src/ngResource/resource.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.2/src/ngResource/resource.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.1/src/ngResource/resource.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.1.0/src/ngResource/resource.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.8/src/ngResource/resource.js"
                 data-name="v1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.8">v1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.7/src/ngResource/resource.js"
                 data-name="v1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.7">v1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.6/src/ngResource/resource.js"
                 data-name="v1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.6">v1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.5/src/ngResource/resource.js"
                 data-name="v1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.5">v1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.4/src/ngResource/resource.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.3/src/ngResource/resource.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.2/src/ngResource/resource.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.1/src/ngResource/resource.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc12/src/ngResource/resource.js"
                 data-name="v1.0.0rc12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc12">v1.0.0rc12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc11/src/ngResource/resource.js"
                 data-name="v1.0.0rc11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc11">v1.0.0rc11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc10/src/ngResource/resource.js"
                 data-name="v1.0.0rc10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc10">v1.0.0rc10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc9/src/ngResource/resource.js"
                 data-name="v1.0.0rc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc9">v1.0.0rc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc8/src/ngResource/resource.js"
                 data-name="v1.0.0rc8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc8">v1.0.0rc8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc7/src/ngResource/resource.js"
                 data-name="v1.0.0rc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc7">v1.0.0rc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc6/src/ngResource/resource.js"
                 data-name="v1.0.0rc6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc6">v1.0.0rc6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc5/src/ngResource/resource.js"
                 data-name="v1.0.0rc5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc5">v1.0.0rc5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc4/src/ngResource/resource.js"
                 data-name="v1.0.0rc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc4">v1.0.0rc4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc3/src/ngResource/resource.js"
                 data-name="v1.0.0rc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc3">v1.0.0rc3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc2/src/ngResource/resource.js"
                 data-name="v1.0.0rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc2">v1.0.0rc2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0rc1/src/ngResource/resource.js"
                 data-name="v1.0.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0rc1">v1.0.0rc1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v1.0.0/src/ngResource/resource.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.6/src/ngResource/resource.js"
                 data-name="v0.10.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.6">v0.10.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.5/src/ngResource/resource.js"
                 data-name="v0.10.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.5">v0.10.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.4/src/ngResource/resource.js"
                 data-name="v0.10.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.4">v0.10.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.3/src/ngResource/resource.js"
                 data-name="v0.10.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.3">v0.10.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.2/src/ngResource/resource.js"
                 data-name="v0.10.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.2">v0.10.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.1/src/ngResource/resource.js"
                 data-name="v0.10.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.1">v0.10.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.10.0/src/ngResource/resource.js"
                 data-name="v0.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.10.0">v0.10.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.19/src/ngResource/resource.js"
                 data-name="v0.9.19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.19">v0.9.19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.18/src/ngResource/resource.js"
                 data-name="v0.9.18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.18">v0.9.18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.17/src/ngResource/resource.js"
                 data-name="v0.9.17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.17">v0.9.17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.16/src/ngResource/resource.js"
                 data-name="v0.9.16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.16">v0.9.16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.15/src/ngResource/resource.js"
                 data-name="v0.9.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.15">v0.9.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.14/src/ngResource/resource.js"
                 data-name="v0.9.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.14">v0.9.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.13/src/ngResource/resource.js"
                 data-name="v0.9.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.13">v0.9.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.12/src/ngResource/resource.js"
                 data-name="v0.9.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.12">v0.9.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.11/src/ngResource/resource.js"
                 data-name="v0.9.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.11">v0.9.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.10/src/ngResource/resource.js"
                 data-name="v0.9.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.10">v0.9.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.9/src/ngResource/resource.js"
                 data-name="v0.9.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.9">v0.9.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.7/src/ngResource/resource.js"
                 data-name="v0.9.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.7">v0.9.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.6/src/ngResource/resource.js"
                 data-name="v0.9.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.6">v0.9.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.5/src/ngResource/resource.js"
                 data-name="v0.9.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.5">v0.9.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.4/src/ngResource/resource.js"
                 data-name="v0.9.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.4">v0.9.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.3/src/ngResource/resource.js"
                 data-name="v0.9.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.3">v0.9.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.2/src/ngResource/resource.js"
                 data-name="v0.9.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.2">v0.9.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.1/src/ngResource/resource.js"
                 data-name="v0.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.1">v0.9.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/v0.9.0/src/ngResource/resource.js"
                 data-name="v0.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v0.9.0">v0.9.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/g3-v1.0.0-rc2/src/ngResource/resource.js"
                 data-name="g3-v1.0.0-rc2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="g3-v1.0.0-rc2">g3-v1.0.0-rc2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/angular.js/tree/g3-v1.0.0rc1/src/ngResource/resource.js"
                 data-name="g3-v1.0.0rc1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="g3-v1.0.0rc1">g3-v1.0.0rc1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/angular/angular.js/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="src/ngResource/resource.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">angular.js</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js/tree/master/src" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/angular.js/tree/master/src/ngResource" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">ngResource</span></a></span><span class="separator"> / </span><strong class="final-path">resource.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Jeff H. Parrish" class="main-avatar" data-user="1668190" height="24" src="https://avatars2.githubusercontent.com/u/1668190?v=2&amp;s=48" width="24" />
      <span class="author"><a href="/ruffrey" rel="contributor">ruffrey</a></span>
      <time datetime="2014-08-06T15:11:54+01:00" is="relative-time">August 06, 2014</time>
      <div class="commit-title">
          <a href="/angular/angular.js/commit/1bb4e87dd6a0b3a3a66b72faf5056d3f47caf52b" class="message" data-pjax="true" title="docs($resource): fix incorrect comment example for userId

Closes #8507">docs($resource): fix incorrect comment example for userId</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>59</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="petebacondarwin" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=petebacondarwin"><img alt="Pete Bacon Darwin" data-user="15655" height="20" src="https://avatars0.githubusercontent.com/u/15655?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="IgorMinar" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=IgorMinar"><img alt="Igor Minar" data-user="216296" height="20" src="https://avatars2.githubusercontent.com/u/216296?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="kseamon" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=kseamon"><img alt="Karl Seamon" data-user="923677" height="20" src="https://avatars3.githubusercontent.com/u/923677?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="vojtajina" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=vojtajina"><img alt="Vojta Jina" data-user="46647" height="20" src="https://avatars2.githubusercontent.com/u/46647?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="caitp" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=caitp"><img alt="Caitlin Potter" data-user="2294695" height="20" src="https://avatars3.githubusercontent.com/u/2294695?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="matsko" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=matsko"><img alt="Matias Niemelä" data-user="93018" height="20" src="https://avatars1.githubusercontent.com/u/93018?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mhevery" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=mhevery"><img alt="Miško Hevery" data-user="111951" height="20" src="https://avatars3.githubusercontent.com/u/111951?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="cedricss" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=cedricss"><img alt="Cédric Soulas" data-user="802010" height="20" src="https://avatars1.githubusercontent.com/u/802010?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="kzar" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=kzar"><img alt="Dave Barker" data-user="155710" height="20" src="https://avatars0.githubusercontent.com/u/155710?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="sudhirj" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=sudhirj"><img alt="Sudhir Jonathan" data-user="21678" height="20" src="https://avatars0.githubusercontent.com/u/21678?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="simpulton" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=simpulton"><img alt="simpulton" data-user="590361" height="20" src="https://avatars3.githubusercontent.com/u/590361?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="rodyhaddad" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=rodyhaddad"><img alt="Rodric Haddad" data-user="1331190" height="20" src="https://avatars2.githubusercontent.com/u/1331190?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="rwilhelm" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=rwilhelm"><img alt="René Wilhelm" data-user="154026" height="20" src="https://avatars0.githubusercontent.com/u/154026?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="petrovalex" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=petrovalex"><img alt="Aleksandr Petrov" data-user="1401040" height="20" src="https://avatars3.githubusercontent.com/u/1401040?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tbosch" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=tbosch"><img alt="Tobias Bosch" data-user="690815" height="20" src="https://avatars1.githubusercontent.com/u/690815?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="pavelgj" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=pavelgj"><img alt="Pavel Jbanov" data-user="774654" height="20" src="https://avatars1.githubusercontent.com/u/774654?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="pborreli" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=pborreli"><img alt="Pascal Borreli" data-user="77759" height="20" src="https://avatars0.githubusercontent.com/u/77759?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="partap" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=partap"><img alt="Partap Davis" data-user="2281220" height="20" src="https://avatars1.githubusercontent.com/u/2281220?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="ksheedlo" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=ksheedlo"><img alt="Ken Sheedlo" data-user="1271410" height="20" src="https://avatars0.githubusercontent.com/u/1271410?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tstatler" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=tstatler"><img alt="Tim Statler" data-user="408952" height="20" src="https://avatars1.githubusercontent.com/u/408952?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jeffbcross" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=jeffbcross"><img alt="Jeff Cross" data-user="463703" height="20" src="https://avatars2.githubusercontent.com/u/463703?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="mkolodny" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=mkolodny"><img alt="mkolodny" data-user="1448365" height="20" src="https://avatars1.githubusercontent.com/u/1448365?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="maxmart" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=maxmart"><img alt="Max Martinsson" data-user="1684393" height="20" src="https://avatars3.githubusercontent.com/u/1684393?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="treyhunner" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=treyhunner"><img alt="Trey Hunner" data-user="285352" height="20" src="https://avatars2.githubusercontent.com/u/285352?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="marknadig" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=marknadig"><img alt="Mark Nadig" data-user="643921" height="20" src="https://avatars0.githubusercontent.com/u/643921?v=2&amp;s=40" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="linclark" href="/angular/angular.js/commits/master/src/ngResource/resource.js?author=linclark"><img alt="Lin Clark" data-user="105464" height="20" src="https://avatars0.githubusercontent.com/u/105464?v=2&amp;s=40" width="20" /></a>

      <a href="#blob_contributors_box" rel="facebox" class="others-text">and others</a>

    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Pete Bacon Darwin" data-user="15655" height="24" src="https://avatars2.githubusercontent.com/u/15655?v=2&amp;s=48" width="24" />
            <a href="/petebacondarwin">petebacondarwin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Igor Minar" data-user="216296" height="24" src="https://avatars0.githubusercontent.com/u/216296?v=2&amp;s=48" width="24" />
            <a href="/IgorMinar">IgorMinar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Karl Seamon" data-user="923677" height="24" src="https://avatars1.githubusercontent.com/u/923677?v=2&amp;s=48" width="24" />
            <a href="/kseamon">kseamon</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vojta Jina" data-user="46647" height="24" src="https://avatars0.githubusercontent.com/u/46647?v=2&amp;s=48" width="24" />
            <a href="/vojtajina">vojtajina</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Caitlin Potter" data-user="2294695" height="24" src="https://avatars1.githubusercontent.com/u/2294695?v=2&amp;s=48" width="24" />
            <a href="/caitp">caitp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Matias Niemelä" data-user="93018" height="24" src="https://avatars3.githubusercontent.com/u/93018?v=2&amp;s=48" width="24" />
            <a href="/matsko">matsko</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Miško Hevery" data-user="111951" height="24" src="https://avatars1.githubusercontent.com/u/111951?v=2&amp;s=48" width="24" />
            <a href="/mhevery">mhevery</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Cédric Soulas" data-user="802010" height="24" src="https://avatars3.githubusercontent.com/u/802010?v=2&amp;s=48" width="24" />
            <a href="/cedricss">cedricss</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Dave Barker" data-user="155710" height="24" src="https://avatars2.githubusercontent.com/u/155710?v=2&amp;s=48" width="24" />
            <a href="/kzar">kzar</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Sudhir Jonathan" data-user="21678" height="24" src="https://avatars2.githubusercontent.com/u/21678?v=2&amp;s=48" width="24" />
            <a href="/sudhirj">sudhirj</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="simpulton" data-user="590361" height="24" src="https://avatars1.githubusercontent.com/u/590361?v=2&amp;s=48" width="24" />
            <a href="/simpulton">simpulton</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Rodric Haddad" data-user="1331190" height="24" src="https://avatars0.githubusercontent.com/u/1331190?v=2&amp;s=48" width="24" />
            <a href="/rodyhaddad">rodyhaddad</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="René Wilhelm" data-user="154026" height="24" src="https://avatars2.githubusercontent.com/u/154026?v=2&amp;s=48" width="24" />
            <a href="/rwilhelm">rwilhelm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Aleksandr Petrov" data-user="1401040" height="24" src="https://avatars1.githubusercontent.com/u/1401040?v=2&amp;s=48" width="24" />
            <a href="/petrovalex">petrovalex</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tobias Bosch" data-user="690815" height="24" src="https://avatars3.githubusercontent.com/u/690815?v=2&amp;s=48" width="24" />
            <a href="/tbosch">tbosch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Pavel Jbanov" data-user="774654" height="24" src="https://avatars3.githubusercontent.com/u/774654?v=2&amp;s=48" width="24" />
            <a href="/pavelgj">pavelgj</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Pascal Borreli" data-user="77759" height="24" src="https://avatars2.githubusercontent.com/u/77759?v=2&amp;s=48" width="24" />
            <a href="/pborreli">pborreli</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Partap Davis" data-user="2281220" height="24" src="https://avatars3.githubusercontent.com/u/2281220?v=2&amp;s=48" width="24" />
            <a href="/partap">partap</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ken Sheedlo" data-user="1271410" height="24" src="https://avatars2.githubusercontent.com/u/1271410?v=2&amp;s=48" width="24" />
            <a href="/ksheedlo">ksheedlo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tim Statler" data-user="408952" height="24" src="https://avatars3.githubusercontent.com/u/408952?v=2&amp;s=48" width="24" />
            <a href="/tstatler">tstatler</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Cross" data-user="463703" height="24" src="https://avatars0.githubusercontent.com/u/463703?v=2&amp;s=48" width="24" />
            <a href="/jeffbcross">jeffbcross</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="mkolodny" data-user="1448365" height="24" src="https://avatars3.githubusercontent.com/u/1448365?v=2&amp;s=48" width="24" />
            <a href="/mkolodny">mkolodny</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Max Martinsson" data-user="1684393" height="24" src="https://avatars1.githubusercontent.com/u/1684393?v=2&amp;s=48" width="24" />
            <a href="/maxmart">maxmart</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Trey Hunner" data-user="285352" height="24" src="https://avatars0.githubusercontent.com/u/285352?v=2&amp;s=48" width="24" />
            <a href="/treyhunner">treyhunner</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Mark Nadig" data-user="643921" height="24" src="https://avatars2.githubusercontent.com/u/643921?v=2&amp;s=48" width="24" />
            <a href="/marknadig">marknadig</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Lin Clark" data-user="105464" height="24" src="https://avatars2.githubusercontent.com/u/105464?v=2&amp;s=48" width="24" />
            <a href="/linclark">linclark</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Leandro Ostera" data-user="854222" height="24" src="https://avatars0.githubusercontent.com/u/854222?v=2&amp;s=48" width="24" />
            <a href="/leostera">leostera</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="lascap" data-user="1921019" height="24" src="https://avatars0.githubusercontent.com/u/1921019?v=2&amp;s=48" width="24" />
            <a href="/lascap">lascap</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Thomas Belin" data-user="1090716" height="24" src="https://avatars1.githubusercontent.com/u/1090716?v=2&amp;s=48" width="24" />
            <a href="/thomasbelin4">thomasbelin4</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Juha Syrjälä" data-user="25238" height="24" src="https://avatars1.githubusercontent.com/u/25238?v=2&amp;s=48" width="24" />
            <a href="/jsyrjala">jsyrjala</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Joseph Spencer" data-user="2605980" height="24" src="https://avatars2.githubusercontent.com/u/2605980?v=2&amp;s=48" width="24" />
            <a href="/jsdevel">jsdevel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="jessehouchins" data-user="402873" height="24" src="https://avatars1.githubusercontent.com/u/402873?v=2&amp;s=48" width="24" />
            <a href="/jessehouchins">jessehouchins</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jen Bourey" data-user="338073" height="24" src="https://avatars0.githubusercontent.com/u/338073?v=2&amp;s=48" width="24" />
            <a href="/bourey">bourey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff H. Parrish" data-user="1668190" height="24" src="https://avatars2.githubusercontent.com/u/1668190?v=2&amp;s=48" width="24" />
            <a href="/ruffrey">ruffrey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jarrett Harris" data-user="4823018" height="24" src="https://avatars3.githubusercontent.com/u/4823018?v=2&amp;s=48" width="24" />
            <a href="/jarrettch">jarrettch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jan Kuča" data-user="367262" height="24" src="https://avatars1.githubusercontent.com/u/367262?v=2&amp;s=48" width="24" />
            <a href="/jankuca">jankuca</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ryan Schumacher" data-user="46549" height="24" src="https://avatars3.githubusercontent.com/u/46549?v=2&amp;s=48" width="24" />
            <a href="/jrschumacher">jrschumacher</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="unclejustin" data-user="1855233" height="24" src="https://avatars1.githubusercontent.com/u/1855233?v=2&amp;s=48" width="24" />
            <a href="/unclejustin">unclejustin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Patrick Hallisey" data-user="1291634" height="24" src="https://avatars2.githubusercontent.com/u/1291634?v=2&amp;s=48" width="24" />
            <a href="/hallipr">hallipr</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Glenn Goodrich" data-user="54958" height="24" src="https://avatars1.githubusercontent.com/u/54958?v=2&amp;s=48" width="24" />
            <a href="/ruprict">ruprict</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="kasoban" data-user="567466" height="24" src="https://avatars1.githubusercontent.com/u/567466?v=2&amp;s=48" width="24" />
            <a href="/kasoban">kasoban</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="David Bennett" data-user="77516" height="24" src="https://avatars2.githubusercontent.com/u/77516?v=2&amp;s=48" width="24" />
            <a href="/dbinit">dbinit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ciro Nunes" data-user="469908" height="24" src="https://avatars3.githubusercontent.com/u/469908?v=2&amp;s=48" width="24" />
            <a href="/cironunes">cironunes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Chirayu Krishnappa" data-user="37704" height="24" src="https://avatars3.githubusercontent.com/u/37704?v=2&amp;s=48" width="24" />
            <a href="/chirayuk">chirayuk</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vincent Driessen" data-user="83844" height="24" src="https://avatars3.githubusercontent.com/u/83844?v=2&amp;s=48" width="24" />
            <a href="/nvie">nvie</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Fredrik Bonander" data-user="185489" height="24" src="https://avatars2.githubusercontent.com/u/185489?v=2&amp;s=48" width="24" />
            <a href="/fredrikbonander">fredrikbonander</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Wesley Cho" data-user="1703387" height="24" src="https://avatars1.githubusercontent.com/u/1703387?v=2&amp;s=48" width="24" />
            <a href="/wesleycho">wesleycho</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brian Ford" data-user="474988" height="24" src="https://avatars2.githubusercontent.com/u/474988?v=2&amp;s=48" width="24" />
            <a href="/btford">btford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Cezar Berea" data-user="1508048" height="24" src="https://avatars1.githubusercontent.com/u/1508048?v=2&amp;s=48" width="24" />
            <a href="/cezar-berea">cezar-berea</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Benjamín Eidelman" data-user="384553" height="24" src="https://avatars3.githubusercontent.com/u/384553?v=2&amp;s=48" width="24" />
            <a href="/benjamine">benjamine</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Xavier Martin" data-user="214998" height="24" src="https://avatars2.githubusercontent.com/u/214998?v=2&amp;s=48" width="24" />
            <a href="/zeflasher">zeflasher</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Gias Kay Lee" data-user="1006291" height="24" src="https://avatars0.githubusercontent.com/u/1006291?v=2&amp;s=48" width="24" />
            <a href="/gsklee">gsklee</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alexander Shtuchkin" data-user="627997" height="24" src="https://avatars1.githubusercontent.com/u/627997?v=2&amp;s=48" width="24" />
            <a href="/ashtuchkin">ashtuchkin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Andrew McLeod" data-user="1328682" height="24" src="https://avatars0.githubusercontent.com/u/1328682?v=2&amp;s=48" width="24" />
            <a href="/Andrew-McLeod">Andrew-McLeod</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alex Sanford" data-user="842193" height="24" src="https://avatars1.githubusercontent.com/u/842193?v=2&amp;s=48" width="24" />
            <a href="/alexsanford">alexsanford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adrian Gheorghe" data-user="38148" height="24" src="https://avatars2.githubusercontent.com/u/38148?v=2&amp;s=48" width="24" />
            <a href="/deviousdodo">deviousdodo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Adam Shannon" data-user="120951" height="24" src="https://avatars3.githubusercontent.com/u/120951?v=2&amp;s=48" width="24" />
            <a href="/adamdecaf">adamdecaf</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>655 lines (593 sloc)</span>
          <span class="meta-divider"></span>
        <span>26.099 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/angular/angular.js/raw/master/src/ngResource/resource.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/angular/angular.js/blame/master/src/ngResource/resource.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/angular/angular.js/commits/master/src/ngResource/resource.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/angular/angular.js?branch=master&amp;filepath=src%2FngResource%2Fresource.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/angular/angular.js/edit/master/src/ngResource/resource.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/angular/angular.js/delete/master/src/ngResource/resource.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
      
<table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-line-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-line-code js-file-line"><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-line-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L3" class="blob-line-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">$resourceMinErr</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">$$minErr</span><span class="p">(</span><span class="s1">&#39;$resource&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-line-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-line-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-line-code js-file-line"><span class="c1">// Helper functions and regex to lookup a dotted path on an object</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-line-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-line-code js-file-line"><span class="c1">// stopping at undefined/null.  The path must be composed of ASCII</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-line-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-line-code js-file-line"><span class="c1">// identifiers (just like $parse)</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-line-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-line-code js-file-line"><span class="kd">var</span> <span class="nx">MEMBER_NAME_REGEX</span> <span class="o">=</span> <span class="sr">/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-line-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-line-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">isValidDottedPath</span><span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-line-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-line-code js-file-line">  <span class="k">return</span> <span class="p">(</span><span class="nx">path</span> <span class="o">!=</span> <span class="kc">null</span> <span class="o">&amp;&amp;</span> <span class="nx">path</span> <span class="o">!==</span> <span class="s1">&#39;&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">path</span> <span class="o">!==</span> <span class="s1">&#39;hasOwnProperty&#39;</span> <span class="o">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-line-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-line-code js-file-line">      <span class="nx">MEMBER_NAME_REGEX</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">path</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-line-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-line-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-line-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">lookupDottedPath</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">path</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-line-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-line-code js-file-line">  <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isValidDottedPath</span><span class="p">(</span><span class="nx">path</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-line-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-line-code js-file-line">    <span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badmember&#39;</span><span class="p">,</span> <span class="s1">&#39;Dotted member path &quot;@{0}&quot; is invalid.&#39;</span><span class="p">,</span> <span class="nx">path</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-line-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-line-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-line-code js-file-line">  <span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-line-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-line-code js-file-line">  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ii</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ii</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-line-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-line-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-line-code js-file-line">    <span class="nx">obj</span> <span class="o">=</span> <span class="p">(</span><span class="nx">obj</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="o">?</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">:</span> <span class="kc">undefined</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-line-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-line-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-line-code js-file-line">  <span class="k">return</span> <span class="nx">obj</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-line-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-line-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-line-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-line-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-line-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-line-code js-file-line"><span class="cm"> * Create a shallow copy of an object and clear other fields from the destination</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-line-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-line-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-line-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-line-code js-file-line"><span class="kd">function</span> <span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">src</span><span class="p">,</span> <span class="nx">dst</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-line-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-line-code js-file-line">  <span class="nx">dst</span> <span class="o">=</span> <span class="nx">dst</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-line-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-line-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-line-code js-file-line">  <span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">dst</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">){</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-line-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-line-code js-file-line">    <span class="k">delete</span> <span class="nx">dst</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-line-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-line-code js-file-line">  <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-line-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L37" class="blob-line-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-line-code js-file-line">  <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">src</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-line-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-line-code js-file-line">    <span class="k">if</span> <span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="p">(</span><span class="nx">key</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;$&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;$&#39;</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-line-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-line-code js-file-line">      <span class="nx">dst</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">src</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-line-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-line-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-line-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-line-code js-file-line">  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-line-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L43" class="blob-line-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-line-code js-file-line">  <span class="k">return</span> <span class="nx">dst</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-line-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-line-code js-file-line"><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-line-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L46" class="blob-line-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-line-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-line-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-line-code js-file-line"><span class="cm"> * @ngdoc module</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-line-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-line-code js-file-line"><span class="cm"> * @name ngResource</span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-line-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-line-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-line-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-line-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-line-code js-file-line"><span class="cm"> * # ngResource</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-line-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-line-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-line-code js-file-line"><span class="cm"> * The `ngResource` module provides interaction support with RESTful services</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-line-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-line-code js-file-line"><span class="cm"> * via the $resource service.</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-line-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-line-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-line-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-line-code js-file-line"><span class="cm"> * &lt;div doc-module-components=&quot;ngResource&quot;&gt;&lt;/div&gt;</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-line-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-line-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-line-code js-file-line"><span class="cm"> * See {@link ngResource.$resource `$resource`} for usage.</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-line-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-line-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-line-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-line-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-line-code js-file-line"><span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-line-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-line-code js-file-line"><span class="cm"> * @ngdoc service</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-line-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-line-code js-file-line"><span class="cm"> * @name $resource</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-line-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-line-code js-file-line"><span class="cm"> * @requires $http</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-line-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-line-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-line-code js-file-line"><span class="cm"> * @description</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-line-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-line-code js-file-line"><span class="cm"> * A factory which creates a resource object that lets you interact with</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-line-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-line-code js-file-line"><span class="cm"> * [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) server-side data sources.</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-line-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-line-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-line-code js-file-line"><span class="cm"> * The returned resource object has action methods which provide high-level behaviors without</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-line-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-line-code js-file-line"><span class="cm"> * the need to interact with the low level {@link ng.$http $http} service.</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-line-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-line-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-line-code js-file-line"><span class="cm"> * Requires the {@link ngResource `ngResource`} module to be installed.</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-line-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-line-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-line-code js-file-line"><span class="cm"> * By default, trailing slashes will be stripped from the calculated URLs,</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-line-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-line-code js-file-line"><span class="cm"> * which can pose problems with server backends that do not expect that</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-line-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-line-code js-file-line"><span class="cm"> * behavior.  This can be disabled by configuring the `$resourceProvider` like</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-line-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-line-code js-file-line"><span class="cm"> * this:</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-line-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-line-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-line-code js-file-line"><span class="cm"> * ```js</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-line-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-line-code js-file-line"><span class="cm">     app.config([&#39;$resourceProvider&#39;, function ($resourceProvider) {</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-line-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-line-code js-file-line"><span class="cm">       // Don&#39;t strip trailing slashes from calculated URLs</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-line-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-line-code js-file-line"><span class="cm">       $resourceProvider.defaults.stripTrailingSlashes = false;</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-line-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-line-code js-file-line"><span class="cm">     }]);</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-line-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-line-code js-file-line"><span class="cm"> * ```</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-line-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-line-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-line-code js-file-line"><span class="cm"> * @param {string} url A parametrized URL template with parameters prefixed by `:` as in</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-line-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-line-code js-file-line"><span class="cm"> *   `/user/:username`. If you are using a URL with a port number (e.g.</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-line-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-line-code js-file-line"><span class="cm"> *   `http://example.com:8080/api`), it will be respected.</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-line-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-line-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-line-code js-file-line"><span class="cm"> *   If you are using a url with a suffix, just add the suffix, like this:</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-line-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-line-code js-file-line"><span class="cm"> *   `$resource(&#39;http://example.com/resource.json&#39;)` or `$resource(&#39;http://example.com/:id.json&#39;)`</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-line-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-line-code js-file-line"><span class="cm"> *   or even `$resource(&#39;http://example.com/resource/:resource_id.:format&#39;)`</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-line-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-line-code js-file-line"><span class="cm"> *   If the parameter before the suffix is empty, :resource_id in this case, then the `/.` will be</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-line-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-line-code js-file-line"><span class="cm"> *   collapsed down to a single `.`.  If you need this sequence to appear and not collapse then you</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-line-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-line-code js-file-line"><span class="cm"> *   can escape it with `/\.`.</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-line-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-line-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-line-code js-file-line"><span class="cm"> * @param {Object=} paramDefaults Default values for `url` parameters. These can be overridden in</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-line-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-line-code js-file-line"><span class="cm"> *   `actions` methods. If any of the parameter value is a function, it will be executed every time</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-line-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-line-code js-file-line"><span class="cm"> *   when a param value needs to be obtained for a request (unless the param was overridden).</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-line-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-line-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-line-code js-file-line"><span class="cm"> *   Each key value in the parameter object is first bound to url template if present and then any</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-line-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-line-code js-file-line"><span class="cm"> *   excess keys are appended to the url search query after the `?`.</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-line-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-line-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-line-code js-file-line"><span class="cm"> *   Given a template `/path/:verb` and parameter `{verb:&#39;greet&#39;, salutation:&#39;Hello&#39;}` results in</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-line-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-line-code js-file-line"><span class="cm"> *   URL `/path/greet?salutation=Hello`.</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-line-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-line-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-line-code js-file-line"><span class="cm"> *   If the parameter value is prefixed with `@` then the value for that parameter will be extracted</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-line-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-line-code js-file-line"><span class="cm"> *   from the corresponding property on the `data` object (provided when calling an action method).  For</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-line-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-line-code js-file-line"><span class="cm"> *   example, if the `defaultParam` object is `{someParam: &#39;@someProp&#39;}` then the value of `someParam`</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-line-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-line-code js-file-line"><span class="cm"> *   will be `data.someProp`.</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-line-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-line-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-line-code js-file-line"><span class="cm"> * @param {Object.&lt;Object&gt;=} actions Hash with declaration of custom action that should extend</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-line-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-line-code js-file-line"><span class="cm"> *   the default set of resource actions. The declaration should be created in the format of {@link</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-line-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-line-code js-file-line"><span class="cm"> *   ng.$http#usage_parameters $http.config}:</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-line-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-line-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-line-code js-file-line"><span class="cm"> *       {action1: {method:?, params:?, isArray:?, headers:?, ...},</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-line-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-line-code js-file-line"><span class="cm"> *        action2: {method:?, params:?, isArray:?, headers:?, ...},</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-line-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-line-code js-file-line"><span class="cm"> *        ...}</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-line-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-line-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-line-code js-file-line"><span class="cm"> *   Where:</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-line-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-line-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-line-code js-file-line"><span class="cm"> *   - **`action`** – {string} – The name of action. This name becomes the name of the method on</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-line-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-line-code js-file-line"><span class="cm"> *     your resource object.</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-line-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-line-code js-file-line"><span class="cm"> *   - **`method`** – {string} – Case insensitive HTTP method (e.g. `GET`, `POST`, `PUT`,</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-line-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-line-code js-file-line"><span class="cm"> *     `DELETE`, `JSONP`, etc).</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-line-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-line-code js-file-line"><span class="cm"> *   - **`params`** – {Object=} – Optional set of pre-bound parameters for this action. If any of</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-line-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-line-code js-file-line"><span class="cm"> *     the parameter value is a function, it will be executed every time when a param value needs to</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-line-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-line-code js-file-line"><span class="cm"> *     be obtained for a request (unless the param was overridden).</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-line-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-line-code js-file-line"><span class="cm"> *   - **`url`** – {string} – action specific `url` override. The url templating is supported just</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-line-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-line-code js-file-line"><span class="cm"> *     like for the resource-level urls.</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-line-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-line-code js-file-line"><span class="cm"> *   - **`isArray`** – {boolean=} – If true then the returned object for this action is an array,</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-line-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-line-code js-file-line"><span class="cm"> *     see `returns` section.</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-line-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-line-code js-file-line"><span class="cm"> *   - **`transformRequest`** –</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-line-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-line-code js-file-line"><span class="cm"> *     `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-line-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-line-code js-file-line"><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-line-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-line-code js-file-line"><span class="cm"> *     request body and headers and returns its transformed (typically serialized) version.</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-line-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-line-code js-file-line"><span class="cm"> *   - **`transformResponse`** –</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-line-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-line-code js-file-line"><span class="cm"> *     `{function(data, headersGetter)|Array.&lt;function(data, headersGetter)&gt;}` –</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-line-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-line-code js-file-line"><span class="cm"> *     transform function or an array of such functions. The transform function takes the http</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-line-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-line-code js-file-line"><span class="cm"> *     response body and headers and returns its transformed (typically deserialized) version.</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-line-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-line-code js-file-line"><span class="cm"> *   - **`cache`** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-line-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-line-code js-file-line"><span class="cm"> *     GET request, otherwise if a cache instance built with</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-line-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-line-code js-file-line"><span class="cm"> *     {@link ng.$cacheFactory $cacheFactory}, this cache will be used for</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-line-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-line-code js-file-line"><span class="cm"> *     caching.</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-line-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-line-code js-file-line"><span class="cm"> *   - **`timeout`** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise} that</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-line-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-line-code js-file-line"><span class="cm"> *     should abort the request when resolved.</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-line-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-line-code js-file-line"><span class="cm"> *   - **`withCredentials`** - `{boolean}` - whether to set the `withCredentials` flag on the</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-line-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-line-code js-file-line"><span class="cm"> *     XHR object. See</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-line-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-line-code js-file-line"><span class="cm"> *     [requests with credentials](https://developer.mozilla.org/en/http_access_control#section_5)</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-line-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-line-code js-file-line"><span class="cm"> *     for more information.</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-line-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-line-code js-file-line"><span class="cm"> *   - **`responseType`** - `{string}` - see</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-line-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-line-code js-file-line"><span class="cm"> *     [requestType](https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#responseType).</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-line-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-line-code js-file-line"><span class="cm"> *   - **`interceptor`** - `{Object=}` - The interceptor object has two optional methods -</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-line-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-line-code js-file-line"><span class="cm"> *     `response` and `responseError`. Both `response` and `responseError` interceptors get called</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-line-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-line-code js-file-line"><span class="cm"> *     with `http response` object. See {@link ng.$http $http interceptors}.</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-line-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-line-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-line-code js-file-line"><span class="cm"> * @param {Object} options Hash with custom settings that should extend the</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-line-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-line-code js-file-line"><span class="cm"> *   default `$resourceProvider` behavior.  The only supported option is</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-line-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-line-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-line-code js-file-line"><span class="cm"> *   Where:</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-line-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-line-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-line-code js-file-line"><span class="cm"> *   - **`stripTrailingSlashes`** – {boolean} – If true then the trailing</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-line-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-line-code js-file-line"><span class="cm"> *   slashes from any calculated URL will be stripped. (Defaults to true.)</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-line-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-line-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-line-code js-file-line"><span class="cm"> * @returns {Object} A resource &quot;class&quot; object with methods for the default set of resource actions</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-line-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-line-code js-file-line"><span class="cm"> *   optionally extended with custom `actions`. The default set contains these actions:</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-line-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-line-code js-file-line"><span class="cm"> *   ```js</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-line-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-line-code js-file-line"><span class="cm"> *   { &#39;get&#39;:    {method:&#39;GET&#39;},</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-line-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-line-code js-file-line"><span class="cm"> *     &#39;save&#39;:   {method:&#39;POST&#39;},</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-line-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-line-code js-file-line"><span class="cm"> *     &#39;query&#39;:  {method:&#39;GET&#39;, isArray:true},</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-line-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-line-code js-file-line"><span class="cm"> *     &#39;remove&#39;: {method:&#39;DELETE&#39;},</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-line-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-line-code js-file-line"><span class="cm"> *     &#39;delete&#39;: {method:&#39;DELETE&#39;} };</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-line-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-line-code js-file-line"><span class="cm"> *   ```</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-line-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-line-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-line-code js-file-line"><span class="cm"> *   Calling these methods invoke an {@link ng.$http} with the specified http method,</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-line-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-line-code js-file-line"><span class="cm"> *   destination and parameters. When the data is returned from the server then the object is an</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-line-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-line-code js-file-line"><span class="cm"> *   instance of the resource class. The actions `save`, `remove` and `delete` are available on it</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-line-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-line-code js-file-line"><span class="cm"> *   as  methods with the `$` prefix. This allows you to easily perform CRUD operations (create,</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-line-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-line-code js-file-line"><span class="cm"> *   read, update, delete) on server-side data like this:</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-line-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-line-code js-file-line"><span class="cm"> *   ```js</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-line-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-line-code js-file-line"><span class="cm"> *   var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-line-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-line-code js-file-line"><span class="cm"> *   var user = User.get({id:123}, function() {</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-line-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-line-code js-file-line"><span class="cm"> *     user.abc = true;</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-line-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-line-code js-file-line"><span class="cm"> *     user.$save();</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-line-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-line-code js-file-line"><span class="cm"> *   });</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-line-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-line-code js-file-line"><span class="cm"> *   ```</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-line-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-line-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-line-code js-file-line"><span class="cm"> *   It is important to realize that invoking a $resource object method immediately returns an</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-line-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-line-code js-file-line"><span class="cm"> *   empty reference (object or array depending on `isArray`). Once the data is returned from the</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-line-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-line-code js-file-line"><span class="cm"> *   server the existing reference is populated with the actual data. This is a useful trick since</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-line-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-line-code js-file-line"><span class="cm"> *   usually the resource is assigned to a model which is then rendered by the view. Having an empty</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-line-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-line-code js-file-line"><span class="cm"> *   object results in no rendering, once the data arrives from the server then the object is</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-line-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-line-code js-file-line"><span class="cm"> *   populated with the data and the view automatically re-renders itself showing the new data. This</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-line-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-line-code js-file-line"><span class="cm"> *   means that in most cases one never has to write a callback function for the action methods.</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-line-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-line-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-line-code js-file-line"><span class="cm"> *   The action methods on the class object or instance object can be invoked with the following</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-line-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-line-code js-file-line"><span class="cm"> *   parameters:</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-line-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-line-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-line-code js-file-line"><span class="cm"> *   - HTTP GET &quot;class&quot; actions: `Resource.action([parameters], [success], [error])`</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-line-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-line-code js-file-line"><span class="cm"> *   - non-GET &quot;class&quot; actions: `Resource.action([parameters], postData, [success], [error])`</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-line-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-line-code js-file-line"><span class="cm"> *   - non-GET instance actions:  `instance.$action([parameters], [success], [error])`</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-line-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-line-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-line-code js-file-line"><span class="cm"> *   Success callback is called with (value, responseHeaders) arguments. Error callback is called</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-line-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-line-code js-file-line"><span class="cm"> *   with (httpResponse) argument.</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-line-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-line-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-line-code js-file-line"><span class="cm"> *   Class actions return empty instance (with additional properties below).</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-line-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-line-code js-file-line"><span class="cm"> *   Instance actions return promise of the action.</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-line-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-line-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-line-code js-file-line"><span class="cm"> *   The Resource instances and collection have these additional properties:</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-line-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-line-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-line-code js-file-line"><span class="cm"> *   - `$promise`: the {@link ng.$q promise} of the original server interaction that created this</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-line-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-line-code js-file-line"><span class="cm"> *     instance or collection.</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-line-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-line-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-line-code js-file-line"><span class="cm"> *     On success, the promise is resolved with the same resource instance or collection object,</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-line-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-line-code js-file-line"><span class="cm"> *     updated with data from server. This makes it easy to use in</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-line-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-line-code js-file-line"><span class="cm"> *     {@link ngRoute.$routeProvider resolve section of $routeProvider.when()} to defer view</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-line-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-line-code js-file-line"><span class="cm"> *     rendering until the resource(s) are loaded.</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-line-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-line-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-line-code js-file-line"><span class="cm"> *     On failure, the promise is resolved with the {@link ng.$http http response} object, without</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-line-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-line-code js-file-line"><span class="cm"> *     the `resource` property.</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-line-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-line-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-line-code js-file-line"><span class="cm"> *     If an interceptor object was provided, the promise will instead be resolved with the value</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-line-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-line-code js-file-line"><span class="cm"> *     returned by the interceptor.</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-line-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-line-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-line-code js-file-line"><span class="cm"> *   - `$resolved`: `true` after first server interaction is completed (either with success or</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-line-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-line-code js-file-line"><span class="cm"> *      rejection), `false` before that. Knowing if the Resource has been resolved is useful in</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-line-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-line-code js-file-line"><span class="cm"> *      data-binding.</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-line-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-line-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-line-code js-file-line"><span class="cm"> * @example</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-line-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-line-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-line-code js-file-line"><span class="cm"> * # Credit card resource</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-line-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-line-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-line-code js-file-line"><span class="cm"> * ```js</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-line-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-line-code js-file-line"><span class="cm">     // Define CreditCard class</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-line-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-line-code js-file-line"><span class="cm">     var CreditCard = $resource(&#39;/user/:userId/card/:cardId&#39;,</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-line-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-line-code js-file-line"><span class="cm">      {userId:123, cardId:&#39;@id&#39;}, {</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-line-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-line-code js-file-line"><span class="cm">       charge: {method:&#39;POST&#39;, params:{charge:true}}</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-line-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-line-code js-file-line"><span class="cm">      });</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-line-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-line-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-line-code js-file-line"><span class="cm">     // We can retrieve a collection from the server</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-line-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-line-code js-file-line"><span class="cm">     var cards = CreditCard.query(function() {</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-line-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-line-code js-file-line"><span class="cm">       // GET: /user/123/card</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-line-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-line-code js-file-line"><span class="cm">       // server returns: [ {id:456, number:&#39;1234&#39;, name:&#39;Smith&#39;} ];</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-line-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-line-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-line-code js-file-line"><span class="cm">       var card = cards[0];</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-line-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-line-code js-file-line"><span class="cm">       // each item is an instance of CreditCard</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-line-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-line-code js-file-line"><span class="cm">       expect(card instanceof CreditCard).toEqual(true);</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-line-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-line-code js-file-line"><span class="cm">       card.name = &quot;J. Smith&quot;;</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-line-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-line-code js-file-line"><span class="cm">       // non GET methods are mapped onto the instances</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-line-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-line-code js-file-line"><span class="cm">       card.$save();</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-line-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-line-code js-file-line"><span class="cm">       // POST: /user/123/card/456 {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-line-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-line-code js-file-line"><span class="cm">       // server returns: {id:456, number:&#39;1234&#39;, name: &#39;J. Smith&#39;};</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-line-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-line-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-line-code js-file-line"><span class="cm">       // our custom method is mapped as well.</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-line-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-line-code js-file-line"><span class="cm">       card.$charge({amount:9.99});</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-line-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-line-code js-file-line"><span class="cm">       // POST: /user/123/card/456?amount=9.99&amp;charge=true {id:456, number:&#39;1234&#39;, name:&#39;J. Smith&#39;}</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-line-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-line-code js-file-line"><span class="cm">     });</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-line-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L261" class="blob-line-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-line-code js-file-line"><span class="cm">     // we can create an instance as well</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-line-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-line-code js-file-line"><span class="cm">     var newCard = new CreditCard({number:&#39;0123&#39;});</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-line-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-line-code js-file-line"><span class="cm">     newCard.name = &quot;Mike Smith&quot;;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-line-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-line-code js-file-line"><span class="cm">     newCard.$save();</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-line-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-line-code js-file-line"><span class="cm">     // POST: /user/123/card {number:&#39;0123&#39;, name:&#39;Mike Smith&#39;}</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-line-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-line-code js-file-line"><span class="cm">     // server returns: {id:789, number:&#39;0123&#39;, name: &#39;Mike Smith&#39;};</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-line-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-line-code js-file-line"><span class="cm">     expect(newCard.id).toEqual(789);</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-line-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-line-code js-file-line"><span class="cm"> * ```</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-line-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-line-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-line-code js-file-line"><span class="cm"> * The object returned from this function execution is a resource &quot;class&quot; which has &quot;static&quot; method</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-line-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-line-code js-file-line"><span class="cm"> * for each action in the definition.</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-line-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-line-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-line-code js-file-line"><span class="cm"> * Calling these methods invoke `$http` on the `url` template with the given `method`, `params` and</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-line-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-line-code js-file-line"><span class="cm"> * `headers`.</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-line-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-line-code js-file-line"><span class="cm"> * When the data is returned from the server then the object is an instance of the resource type and</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-line-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-line-code js-file-line"><span class="cm"> * all of the non-GET methods are available with `$` prefix. This allows you to easily support CRUD</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-line-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-line-code js-file-line"><span class="cm"> * operations (create, read, update, delete) on server-side data.</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-line-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L279" class="blob-line-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-line-code js-file-line"><span class="cm">   ```js</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-line-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-line-code js-file-line"><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-line-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-line-code js-file-line"><span class="cm">     User.get({userId:123}, function(user) {</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-line-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-line-code js-file-line"><span class="cm">       user.abc = true;</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-line-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-line-code js-file-line"><span class="cm">       user.$save();</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-line-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-line-code js-file-line"><span class="cm">     });</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-line-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-line-code js-file-line"><span class="cm">   ```</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-line-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-line-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-line-code js-file-line"><span class="cm"> * It&#39;s worth noting that the success callback for `get`, `query` and other methods gets passed</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-line-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-line-code js-file-line"><span class="cm"> * in the response that came from the server as well as $http header getter function, so one</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-line-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-line-code js-file-line"><span class="cm"> * could rewrite the above example and get access to http headers as:</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-line-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-line-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-line-code js-file-line"><span class="cm">   ```js</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-line-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-line-code js-file-line"><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-line-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-line-code js-file-line"><span class="cm">     User.get({userId:123}, function(u, getResponseHeaders){</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-line-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-line-code js-file-line"><span class="cm">       u.abc = true;</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-line-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-line-code js-file-line"><span class="cm">       u.$save(function(u, putResponseHeaders) {</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-line-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-line-code js-file-line"><span class="cm">         //u =&gt; saved user object</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-line-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-line-code js-file-line"><span class="cm">         //putResponseHeaders =&gt; $http header getter</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-line-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-line-code js-file-line"><span class="cm">       });</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-line-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-line-code js-file-line"><span class="cm">     });</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-line-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-line-code js-file-line"><span class="cm">   ```</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-line-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-line-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-line-code js-file-line"><span class="cm"> * You can also access the raw `$http` promise via the `$promise` property on the object returned</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-line-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-line-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-line-code js-file-line"><span class="cm">   ```</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-line-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-line-code js-file-line"><span class="cm">     var User = $resource(&#39;/user/:userId&#39;, {userId:&#39;@id&#39;});</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-line-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-line-code js-file-line"><span class="cm">     User.get({userId:123})</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-line-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-line-code js-file-line"><span class="cm">         .$promise.then(function(user) {</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-line-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-line-code js-file-line"><span class="cm">           $scope.user = user;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-line-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-line-code js-file-line"><span class="cm">         });</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-line-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-line-code js-file-line"><span class="cm">   ```</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-line-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L312" class="blob-line-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-line-code js-file-line"><span class="cm"> * # Creating a custom &#39;PUT&#39; request</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-line-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-line-code js-file-line"><span class="cm"> * In this example we create a custom method on our resource to make a PUT request</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-line-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-line-code js-file-line"><span class="cm"> * ```js</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-line-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-line-code js-file-line"><span class="cm"> *    var app = angular.module(&#39;app&#39;, [&#39;ngResource&#39;, &#39;ngRoute&#39;]);</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-line-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-line-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-line-code js-file-line"><span class="cm"> *    // Some APIs expect a PUT request in the format URL/object/ID</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-line-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-line-code js-file-line"><span class="cm"> *    // Here we are creating an &#39;update&#39; method</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-line-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-line-code js-file-line"><span class="cm"> *    app.factory(&#39;Notes&#39;, [&#39;$resource&#39;, function($resource) {</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-line-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-line-code js-file-line"><span class="cm"> *    return $resource(&#39;/notes/:id&#39;, null,</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-line-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-line-code js-file-line"><span class="cm"> *        {</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-line-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-line-code js-file-line"><span class="cm"> *            &#39;update&#39;: { method:&#39;PUT&#39; }</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-line-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-line-code js-file-line"><span class="cm"> *        });</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-line-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-line-code js-file-line"><span class="cm"> *    }]);</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-line-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-line-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-line-code js-file-line"><span class="cm"> *    // In our controller we get the ID from the URL using ngRoute and $routeParams</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-line-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-line-code js-file-line"><span class="cm"> *    // We pass in $routeParams and our Notes factory along with $scope</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-line-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-line-code js-file-line"><span class="cm"> *    app.controller(&#39;NotesCtrl&#39;, [&#39;$scope&#39;, &#39;$routeParams&#39;, &#39;Notes&#39;,</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-line-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-line-code js-file-line"><span class="cm">                                      function($scope, $routeParams, Notes) {</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-line-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-line-code js-file-line"><span class="cm"> *    // First get a note object from the factory</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-line-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-line-code js-file-line"><span class="cm"> *    var note = Notes.get({ id:$routeParams.id });</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-line-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-line-code js-file-line"><span class="cm"> *    $id = note.id;</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-line-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-line-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-line-code js-file-line"><span class="cm"> *    // Now call update passing in the ID first then the object you are updating</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-line-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-line-code js-file-line"><span class="cm"> *    Notes.update({ id:$id }, note);</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-line-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-line-code js-file-line"><span class="cm"> *</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-line-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-line-code js-file-line"><span class="cm"> *    // This will PUT /notes/ID with the note object in the request payload</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-line-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-line-code js-file-line"><span class="cm"> *    }]);</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-line-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-line-code js-file-line"><span class="cm"> * ```</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-line-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-line-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-line-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-line-code js-file-line"><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngResource&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]).</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-line-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-line-code js-file-line">  <span class="nx">provider</span><span class="p">(</span><span class="s1">&#39;$resource&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-line-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-line-code js-file-line">    <span class="kd">var</span> <span class="nx">provider</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-line-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-line-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-line-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-line-code js-file-line">      <span class="c1">// Strip slashes by default</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-line-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-line-code js-file-line">      <span class="nx">stripTrailingSlashes</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-line-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-line-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-line-code js-file-line">      <span class="c1">// Default actions configuration</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-line-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-line-code js-file-line">      <span class="nx">actions</span><span class="o">:</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-line-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-line-code js-file-line">        <span class="s1">&#39;get&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span> <span class="s1">&#39;GET&#39;</span><span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-line-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-line-code js-file-line">        <span class="s1">&#39;save&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span> <span class="s1">&#39;POST&#39;</span><span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-line-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-line-code js-file-line">        <span class="s1">&#39;query&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span> <span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">isArray</span><span class="o">:</span> <span class="kc">true</span><span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-line-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-line-code js-file-line">        <span class="s1">&#39;remove&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span> <span class="s1">&#39;DELETE&#39;</span><span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-line-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-line-code js-file-line">        <span class="s1">&#39;delete&#39;</span><span class="o">:</span> <span class="p">{</span><span class="nx">method</span><span class="o">:</span> <span class="s1">&#39;DELETE&#39;</span><span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-line-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-line-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-line-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-line-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L359" class="blob-line-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-line-code js-file-line">    <span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;$http&#39;</span><span class="p">,</span> <span class="s1">&#39;$q&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">$http</span><span class="p">,</span> <span class="nx">$q</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-line-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L361" class="blob-line-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-line-code js-file-line">      <span class="kd">var</span> <span class="nx">noop</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-line-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-line-code js-file-line">        <span class="nx">forEach</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-line-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-line-code js-file-line">        <span class="nx">extend</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">extend</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-line-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-line-code js-file-line">        <span class="nx">copy</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-line-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-line-code js-file-line">        <span class="nx">isFunction</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-line-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L367" class="blob-line-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-line-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-line-code js-file-line"><span class="cm">       * We need our custom method because encodeURIComponent is too aggressive and doesn&#39;t follow</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-line-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-line-code js-file-line"><span class="cm">       * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-line-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-line-code js-file-line"><span class="cm">       * (pchar) allowed in path segments:</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-line-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-line-code js-file-line"><span class="cm">       *    segment       = *pchar</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-line-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-line-code js-file-line"><span class="cm">       *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-line-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-line-code js-file-line"><span class="cm">       *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-line-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-line-code js-file-line"><span class="cm">       *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-line-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-line-code js-file-line"><span class="cm">       *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-line-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-line-code js-file-line"><span class="cm">       *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-line-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-line-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-line-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="kc">true</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-line-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%26/gi</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-line-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%3D/gi</span><span class="p">,</span> <span class="s1">&#39;=&#39;</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-line-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%2B/gi</span><span class="p">,</span> <span class="s1">&#39;+&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-line-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-line-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L385" class="blob-line-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L386" class="blob-line-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-line-code js-file-line">      <span class="cm">/**</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-line-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-line-code js-file-line"><span class="cm">       * This method is intended for encoding *key* or *value* parts of query component. We need a</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-line-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-line-code js-file-line"><span class="cm">       * custom method because encodeURIComponent is too aggressive and encodes stuff that doesn&#39;t</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-line-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-line-code js-file-line"><span class="cm">       * have to be encoded per http://tools.ietf.org/html/rfc3986:</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-line-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-line-code js-file-line"><span class="cm">       *    query       = *( pchar / &quot;/&quot; / &quot;?&quot; )</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-line-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-line-code js-file-line"><span class="cm">       *    pchar         = unreserved / pct-encoded / sub-delims / &quot;:&quot; / &quot;@&quot;</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-line-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-line-code js-file-line"><span class="cm">       *    unreserved    = ALPHA / DIGIT / &quot;-&quot; / &quot;.&quot; / &quot;_&quot; / &quot;~&quot;</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-line-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-line-code js-file-line"><span class="cm">       *    pct-encoded   = &quot;%&quot; HEXDIG HEXDIG</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-line-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-line-code js-file-line"><span class="cm">       *    sub-delims    = &quot;!&quot; / &quot;$&quot; / &quot;&amp;&quot; / &quot;&#39;&quot; / &quot;(&quot; / &quot;)&quot;</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-line-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-line-code js-file-line"><span class="cm">       *                     / &quot;*&quot; / &quot;+&quot; / &quot;,&quot; / &quot;;&quot; / &quot;=&quot;</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-line-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-line-code js-file-line"><span class="cm">       */</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-line-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">encodeUriQuery</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">pctEncodeSpaces</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-line-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nb">encodeURIComponent</span><span class="p">(</span><span class="nx">val</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-line-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%40/gi</span><span class="p">,</span> <span class="s1">&#39;@&#39;</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-line-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%3A/gi</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-line-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%24/g</span><span class="p">,</span> <span class="s1">&#39;$&#39;</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-line-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%2C/gi</span><span class="p">,</span> <span class="s1">&#39;,&#39;</span><span class="p">).</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-line-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-line-code js-file-line">          <span class="nx">replace</span><span class="p">(</span><span class="sr">/%20/g</span><span class="p">,</span> <span class="p">(</span><span class="nx">pctEncodeSpaces</span> <span class="o">?</span> <span class="s1">&#39;%20&#39;</span> <span class="o">:</span> <span class="s1">&#39;+&#39;</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-line-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-line-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L406" class="blob-line-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">template</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-line-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-line-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">template</span> <span class="o">=</span> <span class="nx">template</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-line-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-line-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">defaults</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">provider</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="nx">defaults</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-line-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-line-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-line-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-line-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L412" class="blob-line-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-line-code js-file-line">      <span class="nx">Route</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-line-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-line-code js-file-line">        <span class="nx">setUrlParams</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">config</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="nx">actionUrl</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-line-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-line-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-line-code js-file-line">            <span class="nx">url</span> <span class="o">=</span> <span class="nx">actionUrl</span> <span class="o">||</span> <span class="nx">self</span><span class="p">.</span><span class="nx">template</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-line-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-line-code js-file-line">            <span class="nx">val</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-line-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-line-code js-file-line">            <span class="nx">encodedVal</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-line-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L419" class="blob-line-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">urlParams</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-line-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-line-code js-file-line">          <span class="nx">forEach</span><span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\W/</span><span class="p">),</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">param</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-line-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">param</span> <span class="o">===</span> <span class="s1">&#39;hasOwnProperty&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-line-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-line-code js-file-line">              <span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badname&#39;</span><span class="p">,</span> <span class="s2">&quot;hasOwnProperty is not a valid parameter name.&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-line-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-line-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;^\\d+$&quot;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">param</span><span class="p">))</span> <span class="o">&amp;&amp;</span> <span class="nx">param</span> <span class="o">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-line-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-line-code js-file-line">              <span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(^|[^\\\\]):&quot;</span> <span class="o">+</span> <span class="nx">param</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">).</span><span class="nx">test</span><span class="p">(</span><span class="nx">url</span><span class="p">)))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-line-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-line-code js-file-line">              <span class="nx">urlParams</span><span class="p">[</span><span class="nx">param</span><span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-line-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-line-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-line-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-line-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-line-code js-file-line">          <span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\:/g</span><span class="p">,</span> <span class="s1">&#39;:&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-line-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L431" class="blob-line-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-line-code js-file-line">          <span class="nx">params</span> <span class="o">=</span> <span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-line-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-line-code js-file-line">          <span class="nx">forEach</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">_</span><span class="p">,</span> <span class="nx">urlParam</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-line-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-line-code js-file-line">            <span class="nx">val</span> <span class="o">=</span> <span class="nx">params</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">urlParam</span><span class="p">)</span> <span class="o">?</span> <span class="nx">params</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">]</span> <span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">defaults</span><span class="p">[</span><span class="nx">urlParam</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-line-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">val</span> <span class="o">!==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-line-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-line-code js-file-line">              <span class="nx">encodedVal</span> <span class="o">=</span> <span class="nx">encodeUriSegment</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-line-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-line-code js-file-line">              <span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;:&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">p1</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-line-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">encodedVal</span> <span class="o">+</span> <span class="nx">p1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-line-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-line-code js-file-line">              <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-line-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-line-code js-file-line">            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-line-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-line-code js-file-line">              <span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;(\/?):&quot;</span> <span class="o">+</span> <span class="nx">urlParam</span> <span class="o">+</span> <span class="s2">&quot;(\\W|$)&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span><span class="p">),</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">match</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-line-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-line-code js-file-line">                  <span class="nx">leadingSlashes</span><span class="p">,</span> <span class="nx">tail</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-line-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">tail</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-line-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-line-code js-file-line">                  <span class="k">return</span> <span class="nx">tail</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-line-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-line-code js-file-line">                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-line-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-line-code js-file-line">                  <span class="k">return</span> <span class="nx">leadingSlashes</span> <span class="o">+</span> <span class="nx">tail</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-line-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-line-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-line-code js-file-line">              <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-line-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-line-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-line-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-line-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L451" class="blob-line-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-line-code js-file-line">          <span class="c1">// strip trailing slashes and set the url (unless this behavior is specifically disabled)</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-line-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-line-code js-file-line">          <span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">stripTrailingSlashes</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-line-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-line-code js-file-line">            <span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/+$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;/&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-line-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-line-code js-file-line">          <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-line-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L456" class="blob-line-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-line-code js-file-line">          <span class="c1">// then replace collapse `/.` if found in the last URL path segment before the query</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-line-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-line-code js-file-line">          <span class="c1">// E.g. `http://url.com/id./format?q=x` becomes `http://url.com/id.format?q=x`</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-line-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-line-code js-file-line">          <span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\.(?=\w+($|\?))/</span><span class="p">,</span> <span class="s1">&#39;.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-line-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-line-code js-file-line">          <span class="c1">// replace escaped `/\.` with `/.`</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-line-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-line-code js-file-line">          <span class="nx">config</span><span class="p">.</span><span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\/\\\./</span><span class="p">,</span> <span class="s1">&#39;/.&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-line-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L462" class="blob-line-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-line-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-line-code js-file-line">          <span class="c1">// set params - delegate param encoding to $http</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-line-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-line-code js-file-line">          <span class="nx">forEach</span><span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-line-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">urlParams</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-line-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-line-code js-file-line">              <span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-line-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-line-code js-file-line">              <span class="nx">config</span><span class="p">.</span><span class="nx">params</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-line-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-line-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-line-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-line-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-line-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-line-code js-file-line">      <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-line-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L473" class="blob-line-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L474" class="blob-line-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-line-code js-file-line">      <span class="kd">function</span> <span class="nx">resourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actions</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-line-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-line-code js-file-line">        <span class="kd">var</span> <span class="nx">route</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Route</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-line-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L477" class="blob-line-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-line-code js-file-line">        <span class="nx">actions</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">provider</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">actions</span><span class="p">,</span> <span class="nx">actions</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-line-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L479" class="blob-line-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L480" class="blob-line-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">ids</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-line-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-line-code js-file-line">          <span class="nx">actionParams</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">actionParams</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-line-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-line-code js-file-line">          <span class="nx">forEach</span><span class="p">(</span><span class="nx">actionParams</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-line-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">();</span> <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-line-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-line-code js-file-line">            <span class="nx">ids</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;@&#39;</span> <span class="o">?</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-line-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-line-code js-file-line">              <span class="nx">lookupDottedPath</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="o">:</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-line-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-line-code js-file-line">          <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-line-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">ids</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-line-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-line-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L490" class="blob-line-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">defaultResponseInterceptor</span><span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-line-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">response</span><span class="p">.</span><span class="nx">resource</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-line-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-line-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L494" class="blob-line-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-line-code js-file-line">        <span class="kd">function</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-line-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-line-code js-file-line">          <span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">value</span> <span class="o">||</span> <span class="p">{},</span> <span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-line-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-line-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-line-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L498" class="blob-line-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-line-code js-file-line">        <span class="nx">Resource</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-line-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">extend</span><span class="p">({},</span> <span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-line-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-line-code js-file-line">          <span class="k">delete</span> <span class="nx">data</span><span class="p">.</span><span class="nx">$promise</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-line-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-line-code js-file-line">          <span class="k">delete</span> <span class="nx">data</span><span class="p">.</span><span class="nx">$resolved</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-line-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-line-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-line-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L505" class="blob-line-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-line-code js-file-line">        <span class="nx">forEach</span><span class="p">(</span><span class="nx">actions</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-line-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-line-code js-file-line">          <span class="kd">var</span> <span class="nx">hasBody</span> <span class="o">=</span> <span class="sr">/^(POST|PUT|PATCH)$/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">method</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-line-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L508" class="blob-line-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-line-code js-file-line">          <span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">a1</span><span class="p">,</span> <span class="nx">a2</span><span class="p">,</span> <span class="nx">a3</span><span class="p">,</span> <span class="nx">a4</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L509" class="blob-line-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{},</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-line-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L511" class="blob-line-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-line-code js-file-line">            <span class="cm">/* jshint -W086 */</span> <span class="cm">/* (purposefully fall through case statements) */</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-line-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-line-code js-file-line">            <span class="k">switch</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-line-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-line-code js-file-line">              <span class="k">case</span> <span class="mi">4</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-line-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-line-code js-file-line">                <span class="nx">error</span> <span class="o">=</span> <span class="nx">a4</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-line-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-line-code js-file-line">                <span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-line-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-line-code js-file-line">              <span class="c1">//fallthrough</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-line-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-line-code js-file-line">              <span class="k">case</span> <span class="mi">3</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-line-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-line-code js-file-line">              <span class="k">case</span> <span class="mi">2</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-line-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a2</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-line-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-line-code js-file-line">                  <span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-line-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-line-code js-file-line">                    <span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L522" class="blob-line-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-line-code js-file-line">                    <span class="nx">error</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-line-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-line-code js-file-line">                    <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-line-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-line-code js-file-line">                  <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-line-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-line-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-line-code js-file-line">                  <span class="nx">success</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-line-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-line-code js-file-line">                  <span class="nx">error</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-line-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-line-code js-file-line">                  <span class="c1">//fallthrough</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-line-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-line-code js-file-line">                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-line-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-line-code js-file-line">                  <span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-line-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-line-code js-file-line">                  <span class="nx">data</span> <span class="o">=</span> <span class="nx">a2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-line-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-line-code js-file-line">                  <span class="nx">success</span> <span class="o">=</span> <span class="nx">a3</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-line-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-line-code js-file-line">                  <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-line-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-line-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-line-code js-file-line">              <span class="k">case</span> <span class="mi">1</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-line-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">a1</span><span class="p">))</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-line-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-line-code js-file-line">                <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">hasBody</span><span class="p">)</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-line-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-line-code js-file-line">                <span class="k">else</span> <span class="nx">params</span> <span class="o">=</span> <span class="nx">a1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-line-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-line-code js-file-line">                <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L540" class="blob-line-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-line-code js-file-line">              <span class="k">case</span> <span class="mi">0</span><span class="o">:</span> <span class="k">break</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-line-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-line-code js-file-line">              <span class="k">default</span><span class="o">:</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-line-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-line-code js-file-line">                <span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badargs&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L543" class="blob-line-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-line-code js-file-line">                  <span class="s2">&quot;Expected up to 4 arguments [params, data, success, error], got {0} arguments&quot;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-line-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-line-code js-file-line">                  <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-line-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-line-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-line-code js-file-line">            <span class="cm">/* jshint +W086 */</span> <span class="cm">/* (purposefully fall through case statements) */</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-line-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L548" class="blob-line-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">isInstanceCall</span> <span class="o">=</span> <span class="k">this</span> <span class="k">instanceof</span> <span class="nx">Resource</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-line-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">isInstanceCall</span> <span class="o">?</span> <span class="nx">data</span> <span class="o">:</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">?</span> <span class="p">[]</span> <span class="o">:</span> <span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">data</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-line-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">httpConfig</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-line-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">responseInterceptor</span> <span class="o">=</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span> <span class="o">&amp;&amp;</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span><span class="p">.</span><span class="nx">response</span> <span class="o">||</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-line-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-line-code js-file-line">              <span class="nx">defaultResponseInterceptor</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-line-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">responseErrorInterceptor</span> <span class="o">=</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span> <span class="o">&amp;&amp;</span> <span class="nx">action</span><span class="p">.</span><span class="nx">interceptor</span><span class="p">.</span><span class="nx">responseError</span> <span class="o">||</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-line-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-line-code js-file-line">              <span class="kc">undefined</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-line-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L556" class="blob-line-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-line-code js-file-line">            <span class="nx">forEach</span><span class="p">(</span><span class="nx">action</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-line-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;params&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;isArray&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span> <span class="o">!=</span> <span class="s1">&#39;interceptor&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-line-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-line-code js-file-line">                <span class="nx">httpConfig</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">copy</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L559" class="blob-line-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-line-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-line-code js-file-line">            <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-line-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L562" class="blob-line-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">hasBody</span><span class="p">)</span> <span class="nx">httpConfig</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-line-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-line-code js-file-line">            <span class="nx">route</span><span class="p">.</span><span class="nx">setUrlParams</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-line-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-line-code js-file-line">              <span class="nx">extend</span><span class="p">({},</span> <span class="nx">extractParams</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">action</span><span class="p">.</span><span class="nx">params</span> <span class="o">||</span> <span class="p">{}),</span> <span class="nx">params</span><span class="p">),</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-line-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-line-code js-file-line">              <span class="nx">action</span><span class="p">.</span><span class="nx">url</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-line-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L567" class="blob-line-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">promise</span> <span class="o">=</span> <span class="nx">$http</span><span class="p">(</span><span class="nx">httpConfig</span><span class="p">).</span><span class="nx">then</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-line-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-line-code js-file-line">              <span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">response</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-line-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-line-code js-file-line">                <span class="nx">promise</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-line-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L571" class="blob-line-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-line-code js-file-line">              <span class="k">if</span> <span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-line-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-line-code js-file-line">                <span class="c1">// Need to convert action.isArray to boolean in case it is undefined</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-line-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-line-code js-file-line">                <span class="c1">// jshint -W018</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-line-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">!==</span> <span class="p">(</span><span class="o">!!</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-line-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-line-code js-file-line">                  <span class="k">throw</span> <span class="nx">$resourceMinErr</span><span class="p">(</span><span class="s1">&#39;badcfg&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-line-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-line-code js-file-line">                      <span class="s1">&#39;Error in resource configuration. Expected &#39;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-line-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-line-code js-file-line">                      <span class="s1">&#39;response to contain an {0} but got an {1}&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-line-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-line-code js-file-line">                    <span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">?</span> <span class="s1">&#39;array&#39;</span> <span class="o">:</span> <span class="s1">&#39;object&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L579" class="blob-line-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-line-code js-file-line">                    <span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;array&#39;</span> <span class="o">:</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-line-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-line-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-line-code js-file-line">                <span class="c1">// jshint +W018</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-line-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-line-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="nx">action</span><span class="p">.</span><span class="nx">isArray</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-line-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-line-code js-file-line">                  <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-line-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-line-code js-file-line">                  <span class="nx">forEach</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">item</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-line-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-line-code js-file-line">                    <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">item</span> <span class="o">===</span> <span class="s2">&quot;object&quot;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-line-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-line-code js-file-line">                      <span class="nx">value</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="k">new</span> <span class="nx">Resource</span><span class="p">(</span><span class="nx">item</span><span class="p">));</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-line-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-line-code js-file-line">                    <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-line-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-line-code js-file-line">                      <span class="c1">// Valid JSON values may be string literals, and these should not be converted</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-line-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-line-code js-file-line">                      <span class="c1">// into objects. These items will not have access to the Resource prototype</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-line-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-line-code js-file-line">                      <span class="c1">// methods, but unfortunately there</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-line-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-line-code js-file-line">                      <span class="nx">value</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-line-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-line-code js-file-line">                    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L593" class="blob-line-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-line-code js-file-line">                  <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-line-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-line-code js-file-line">                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-line-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-line-code js-file-line">                  <span class="nx">shallowClearAndCopy</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-line-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-line-code js-file-line">                  <span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-line-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-line-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-line-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-line-code js-file-line">              <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-line-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L600" class="blob-line-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-line-code js-file-line">              <span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-line-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L602" class="blob-line-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-line-code js-file-line">              <span class="nx">response</span><span class="p">.</span><span class="nx">resource</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-line-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L604" class="blob-line-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="nx">response</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-line-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-line-code js-file-line">            <span class="p">},</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-line-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-line-code js-file-line">              <span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-line-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L608" class="blob-line-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-line-code js-file-line">              <span class="p">(</span><span class="nx">error</span> <span class="o">||</span> <span class="nx">noop</span><span class="p">)(</span><span class="nx">response</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-line-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L610" class="blob-line-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="nx">$q</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nx">response</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-line-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-line-code js-file-line">            <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-line-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L613" class="blob-line-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-line-code js-file-line">            <span class="nx">promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-line-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-line-code js-file-line">              <span class="kd">function</span> <span class="p">(</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-line-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-line-code js-file-line">                <span class="kd">var</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">responseInterceptor</span><span class="p">(</span><span class="nx">response</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-line-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-line-code js-file-line">                <span class="p">(</span><span class="nx">success</span> <span class="o">||</span> <span class="nx">noop</span><span class="p">)(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">response</span><span class="p">.</span><span class="nx">headers</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-line-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-line-code js-file-line">                <span class="k">return</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-line-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-line-code js-file-line">              <span class="p">},</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-line-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-line-code js-file-line">              <span class="nx">responseErrorInterceptor</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-line-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-line-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isInstanceCall</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-line-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-line-code js-file-line">              <span class="c1">// we are creating instance / collection</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-line-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-line-code js-file-line">              <span class="c1">// - set the initial promise</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-line-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-line-code js-file-line">              <span class="c1">// - return the instance / collection</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-line-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-line-code js-file-line">              <span class="nx">value</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">=</span> <span class="nx">promise</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-line-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-line-code js-file-line">              <span class="nx">value</span><span class="p">.</span><span class="nx">$resolved</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-line-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L628" class="blob-line-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-line-code js-file-line">              <span class="k">return</span> <span class="nx">value</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-line-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-line-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-line-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-line-code js-file-line">            <span class="c1">// instance call</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-line-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">promise</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-line-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-line-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L635" class="blob-line-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L636" class="blob-line-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-line-code js-file-line">          <span class="nx">Resource</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="s1">&#39;$&#39;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">params</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L637" class="blob-line-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-line-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">params</span><span class="p">))</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-line-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-line-code js-file-line">              <span class="nx">error</span> <span class="o">=</span> <span class="nx">success</span><span class="p">;</span> <span class="nx">success</span> <span class="o">=</span> <span class="nx">params</span><span class="p">;</span> <span class="nx">params</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-line-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-line-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-line-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-line-code js-file-line">            <span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">Resource</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">params</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="nx">success</span><span class="p">,</span> <span class="nx">error</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-line-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-line-code js-file-line">            <span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">$promise</span> <span class="o">||</span> <span class="nx">result</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-line-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-line-code js-file-line">          <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-line-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-line-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-line-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L645" class="blob-line-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-line-code js-file-line">        <span class="nx">Resource</span><span class="p">.</span><span class="nx">bind</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">additionalParamDefaults</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-line-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-line-code js-file-line">          <span class="k">return</span> <span class="nx">resourceFactory</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">extend</span><span class="p">({},</span> <span class="nx">paramDefaults</span><span class="p">,</span> <span class="nx">additionalParamDefaults</span><span class="p">),</span> <span class="nx">actions</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-line-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-line-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-line-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L649" class="blob-line-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-line-code js-file-line">        <span class="k">return</span> <span class="nx">Resource</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-line-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-line-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-line-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-line-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L652" class="blob-line-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-line-code js-file-line">      <span class="k">return</span> <span class="nx">resourceFactory</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-line-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-line-code js-file-line">    <span class="p">}];</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-line-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-line-code js-file-line">  <span class="p">});</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05290s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-2b4202fc62ef88e1a007a9ed05df10607b189f42.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-182d5c457364a3eb8dd3e91fbdaf138c28c38b72.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

