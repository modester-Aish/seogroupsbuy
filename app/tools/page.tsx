'use client'

import { useState, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// Helper function to get proper logo URLs
const getLogoUrl = (toolName: string) => {
  const logoMap: { [key: string]: string } = {
    'Rafflepress': 'rafflepress.com',
    'Wpfunnels': 'wpfunnels.com',
    'Jetpack': 'jetpack.com',
    'Thirstyaffiliates': 'thirstyaffiliates.com',
    'Wpml': 'wpml.org',
    'Rank Math': 'rankmath.com',
    'Elementor': 'elementor.com',
    'Divi': 'elegantthemes.com',
    'Oxygen': 'oxygenbuilder.com',
    'Beaver Builder': 'wpbeaverbuilder.com',
    'Thrive': 'thrivethemes.com',
    'WP Rocket': 'wp-rocket.me',
    'Yoast': 'yoast.com',
    'MonsterInsights': 'monsterinsights.com',
    'Ahrefs': 'ahrefs.com',
    'SEMrush': 'semrush.com',
    'Moz': 'moz.com',
    'Screaming Frog': 'screamingfrog.co.uk',
    'Majestic': 'majestic.com',
    'SpyFu': 'spyfu.com',
    'Ubersuggest': 'ubersuggest.com',
    'SE Ranking': 'seranking.com',
    'Serpstat': 'serpstat.com',
    'BrightLocal': 'brightlocal.com',
    'Whitespark': 'whitespark.ca',
    'Linkody': 'linkody.com',
    'Pitchbox': 'pitchbox.com',
    'BuzzStream': 'buzzstream.com',
    'NinjaOutreach': 'ninjaoutreach.com',
    'Hunter': 'hunter.io',
    'Voila Norbert': 'voilanorbert.com',
    'Snov': 'snov.io',
    'Clearbit': 'clearbit.com',
    'BuiltWith': 'builtwith.com',
    'SimilarWeb': 'similarweb.com',
    'Alexa': 'alexa.com',
    'SpyOnWeb': 'spyonweb.com',
    'WooRank': 'woorank.com',
    'GTmetrix': 'gtmetrix.com',
    'Pingdom': 'pingdom.com',
    'WebPageTest': 'webpagetest.org',
    'Google PageSpeed': 'developers.google.com',
    'Dareboost': 'dareboost.com',
    'Hotjar': 'hotjar.com',
    'Crazy Egg': 'crazyegg.com',
    'Lucky Orange': 'luckyorange.com',
    'Mouseflow': 'mouseflow.com',
    'FullStory': 'fullstory.com',
    'Canva': 'canva.com',
    'Adobe Creative Cloud': 'adobe.com',
    'Figma': 'figma.com',
    'Sketch': 'sketch.com',
    'InVision': 'invisionapp.com',
    'Visme': 'visme.co',
    'Piktochart': 'piktochart.com',
    'Crello': 'crello.com',
    'Venngage': 'venngage.com',
    'Snappa': 'snappa.com',
    'ChatGPT': 'openai.com',
    'Jasper': 'jasper.ai',
    'Copy.ai': 'copy.ai',
    'Writesonic': 'writesonic.com',
    'Rytr': 'rytr.me',
    'ContentBot': 'contentbot.ai',
    'Article Forge': 'articleforge.com',
    'WordAi': 'wordai.com',
    'QuillBot': 'quillbot.com',
    'Grammarly': 'grammarly.com',
    'Hemingway': 'hemingwayapp.com',
    'ProWritingAid': 'prowritingaid.com',
    'WhiteSmoke': 'whitesmoke.com',
    'Ginger': 'gingersoftware.com',
    'LanguageTool': 'languagetool.org',
    'Mailchimp': 'mailchimp.com',
    'ConvertKit': 'convertkit.com',
    'ActiveCampaign': 'activecampaign.com',
    'GetResponse': 'getresponse.com',
    'AWeber': 'aweber.com',
    'Constant Contact': 'constantcontact.com',
    'Sendinblue': 'sendinblue.com',
    'Drip': 'drip.com',
    'MailerLite': 'mailerlite.com',
    'Moosend': 'moosend.com',
    'Hootsuite': 'hootsuite.com',
    'Buffer': 'buffer.com',
    'Sprout Social': 'sproutsocial.com',
    'Later': 'later.com',
    'CoSchedule': 'coschedule.com',
    'MeetEdgar': 'meetedgar.com',
    'SocialBee': 'socialbee.io',
    'Sendible': 'sendible.com',
    'Agorapulse': 'agorapulse.com',
    'Loomly': 'loomly.com',
    'HubSpot': 'hubspot.com',
    'Salesforce': 'salesforce.com',
    'Zoho': 'zoho.com',
    'Pipedrive': 'pipedrive.com',
    'Freshsales': 'freshsales.io',
    'Close': 'close.com',
    'Copper': 'copper.com',
    'Insightly': 'insightly.com',
    'Nutshell': 'nutshell.com',
    'Keap': 'keap.com',
    'ClickFunnels': 'clickfunnels.com',
    'Leadpages': 'leadpages.com',
    'Unbounce': 'unbounce.com',
    'Instapage': 'instapage.com',
    'Landingi': 'landingi.com',
    'GetResponse Landing Pages': 'getresponse.com',
    'Wishpond': 'wishpond.com',
    'ShortStack': 'shortstack.com',
    'Lander': 'landerapp.com',
    'Swipe Pages': 'swipepages.com',
    'Google Analytics': 'analytics.google.com',
    'Adobe Analytics': 'adobe.com',
    'Matomo': 'matomo.org',
    'Clicky': 'clicky.com',
    'StatCounter': 'statcounter.com',
    'Mixpanel': 'mixpanel.com',
    'Amplitude': 'amplitude.com',
    'Heap': 'heap.io',
    'Segment': 'segment.com',
    'Kissmetrics': 'kissmetrics.io',
    'OptinMonster': 'optinmonster.com',
    'Sumo': 'sumo.com',
    'Hello Bar': 'hellobar.com',
    'Poptin': 'poptin.com',
    'Privy': 'privy.com',
    'Justuno': 'justuno.com',
    'OptiMonk': 'optimonk.com',
    'Sleeknote': 'sleeknote.com',
    'Proof': 'useproof.com',
    'ConvertFlow': 'convertflow.com',
    'Google Ads': 'ads.google.com',
    'Facebook Ads': 'facebook.com',
    'LinkedIn Ads': 'linkedin.com',
    'Twitter Ads': 'twitter.com',
    'Instagram Ads': 'instagram.com',
    'Pinterest Ads': 'pinterest.com',
    'TikTok Ads': 'tiktok.com',
    'Snapchat Ads': 'snapchat.com',
    'Reddit Ads': 'reddit.com',
    'Quora Ads': 'quora.com',
    'Calendly': 'calendly.com',
    'Acuity': 'acuityscheduling.com',
    'Appointlet': 'appointlet.com',
    'ScheduleOnce': 'scheduleonce.com',
    'Doodle': 'doodle.com',
    'Setster': 'setster.com',
    'SimplyBook': 'simplybook.me',
    'BookSteam': 'booksteam.com',
    'vcita': 'vcita.com',
    'YouCanBook': 'youcanbook.me',
    'Zapier': 'zapier.com',
    'Integromat': 'integromat.com',
    'IFTTT': 'ifttt.com',
    'Automate': 'automate.io',
    'Workato': 'workato.com',
    'Tray': 'tray.io',
    'n8n': 'n8n.io',
    'Pabbly': 'pabbly.com',
    'SureTriggers': 'suretriggers.com',
    'Integrately': 'integrately.com',
    'Typeform': 'typeform.com',
    'JotForm': 'jotform.com',
    'Google Forms': 'google.com',
    'Wufoo': 'wufoo.com',
    'Formstack': 'formstack.com',
    'Cognito Forms': 'cognitoforms.com',
    'FormAssembly': 'formassembly.com',
    'Formsite': 'formsite.com',
    'PandaDoc': 'pandadoc.com',
    'Formidable': 'formidableforms.com',
    'Intercom': 'intercom.com',
    'Drift': 'drift.com',
    'Zendesk': 'zendesk.com',
    'LiveChat': 'livechat.com',
    'Olark': 'olark.com',
    'Tawk': 'tawk.to',
    'Crisp': 'crisp.chat',
    'Freshchat': 'freshchat.com',
    'Tidio': 'tidio.com',
    'Chatra': 'chatra.com',
    'Shopify': 'shopify.com',
    'WooCommerce': 'woocommerce.com',
    'BigCommerce': 'bigcommerce.com',
    'Magento': 'magento.com',
    'PrestaShop': 'prestashop.com',
    'OpenCart': 'opencart.com',
    'Wix': 'wix.com',
    'Squarespace': 'squarespace.com',
    'Volusion': 'volusion.com',
    '3dcart': '3dcart.com',
    'WordPress': 'wordpress.org',
    'Webflow': 'webflow.com',
    'Bubble': 'bubble.io',
    'Carrd': 'carrd.co',
    'Strikingly': 'strikingly.com',
    'Weebly': 'weebly.com',
    'SiteGround': 'siteground.com',
    'GoDaddy': 'godaddy.com',
    'HostGator': 'hostgator.com',
    'Bluehost': 'bluehost.com',
    'Cloudflare': 'cloudflare.com',
    'NameCheap': 'namecheap.com',
    'AWS': 'aws.amazon.com',
    'Google Cloud': 'cloud.google.com',
    'DigitalOcean': 'digitalocean.com',
    'Linode': 'linode.com',
    'Vultr': 'vultr.com',
    'Kinsta': 'kinsta.com',
    'WP Engine': 'wpengine.com',
    'Flywheel': 'getflywheel.com',
    'Cloudways': 'cloudways.com',
    'DreamHost': 'dreamhost.com',
    'InMotion': 'inmotionhosting.com',
    'A2 Hosting': 'a2hosting.com',
    'iPage': 'ipage.com',
    'GreenGeeks': 'greengeeks.com',
    'LiquidWeb': 'liquidweb.com',
    'ScalaHosting': 'scalahosting.com',
    'Hostinger': 'hostinger.com',
    'InterServer': 'interserver.net',
    'FastComet': 'fastcomet.com',
    'ChemiCloud': 'chemicloud.com',
    'TMDHosting': 'tmdhosting.com',
    'InMotionHosting': 'inmotionhosting.com',
    'MDDHosting': 'mddhosting.com',
    'KnownHost': 'knownhost.com',
    'Site5': 'site5.com',
    'AccuWeb': 'accuwebhosting.com',
    'Trello': 'trello.com',
    'Asana': 'asana.com',
    'Monday': 'monday.com',
    'Notion': 'notion.so',
    'ClickUp': 'clickup.com',
    'Basecamp': 'basecamp.com',
    'Wrike': 'wrike.com',
    'Smartsheet': 'smartsheet.com',
    'Airtable': 'airtable.com',
    'Todoist': 'todoist.com',
    'Jira': 'atlassian.com',
    'GitHub': 'github.com',
    'GitLab': 'gitlab.com',
    'Bitbucket': 'bitbucket.org',
    'Slack': 'slack.com',
    'Microsoft Teams': 'microsoft.com',
    'Discord': 'discord.com',
    'Zoom': 'zoom.us',
    'Google Meet': 'meet.google.com',
    'Skype': 'skype.com',
    'GoToMeeting': 'gotomeeting.com',
    'WebEx': 'webex.com',
    'BlueJeans': 'bluejeans.com',
    'Whereby': 'whereby.com',
    'Loom': 'loom.com',
    'Vidyard': 'vidyard.com',
    'Wistia': 'wistia.com',
    'Vimeo': 'vimeo.com',
    'YouTube': 'youtube.com',
    'SproutVideo': 'sproutvideo.com',
    'Brightcove': 'brightcove.com',
    'JW Player': 'jwplayer.com',
    'Kaltura': 'kaltura.com',
    'Streamable': 'streamable.com',
    'Dropbox': 'dropbox.com',
    'Google Drive': 'google.com',
    'OneDrive': 'onedrive.live.com',
    'Box': 'box.com',
    'WeTransfer': 'wetransfer.com',
    'pCloud': 'pcloud.com',
    'Sync': 'sync.com',
    'Tresorit': 'tresorit.com',
    'SpiderOak': 'spideroak.com',
    'Mega': 'mega.nz',
    'Netflix': 'netflix.com',
    'Spotify': 'spotify.com',
    'Amazon Prime': 'amazon.com',
    'Hulu': 'hulu.com',
    'Disney+': 'disneyplus.com',
    'HBO Max': 'hbomax.com',
    'Apple TV+': 'apple.com',
    'Paramount+': 'paramountplus.com',
    'Peacock': 'peacocktv.com',
    'Discovery+': 'discoveryplus.com',
    'Skillshare': 'skillshare.com',
    'Udemy': 'udemy.com',
    'Coursera': 'coursera.org',
    'LinkedIn Learning': 'linkedin.com',
    'Pluralsight': 'pluralsight.com',
    'MasterClass': 'masterclass.com',
    'Teachable': 'teachable.com',
    'Thinkific': 'thinkific.com',
    'Kajabi': 'kajabi.com',
    'Podia': 'podia.com',
    'LastPass': 'lastpass.com',
    '1Password': '1password.com',
    'Dashlane': 'dashlane.com',
    'Bitwarden': 'bitwarden.com',
    'Keeper': 'keepersecurity.com',
    'RoboForm': 'roboform.com',
    'NordPass': 'nordpass.com',
    'Sticky Password': 'stickypassword.com',
    'Password Boss': 'passwordboss.com',
    'True Key': 'truekey.com',
    'NordVPN': 'nordvpn.com',
    'ExpressVPN': 'expressvpn.com',
    'Surfshark': 'surfshark.com',
    'CyberGhost': 'cyberghostvpn.com',
    'IPVanish': 'ipvanish.com',
    'Private Internet Access': 'privateinternetaccess.com',
    'Hotspot Shield': 'hotspotshield.com',
    'TunnelBear': 'tunnelbear.com',
    'ProtonVPN': 'protonvpn.com',
    'Windscribe': 'windscribe.com',
    'Norton': 'norton.com',
    'McAfee': 'mcafee.com',
    'Bitdefender': 'bitdefender.com',
    'Kaspersky': 'kaspersky.com',
    'Avast': 'avast.com',
    'AVG': 'avg.com',
    'Trend Micro': 'trendmicro.com',
    'ESET': 'eset.com',
    'Malwarebytes': 'malwarebytes.com',
    'Webroot': 'webroot.com',
    'Evernote': 'evernote.com',
    'OneNote': 'onenote.com',
    'Bear': 'bear.app',
    'Simplenote': 'simplenote.com',
    'Google Keep': 'keep.google.com',
    'Roam': 'roamresearch.com',
    'Obsidian': 'obsidian.md',
    'Mem': 'mem.ai',
    'Craft': 'craft.do',
    'Coda': 'coda.io',
    'Photoshop': 'adobe.com',
    'Illustrator': 'adobe.com',
    'InDesign': 'adobe.com',
    'Premiere Pro': 'adobe.com',
    'After Effects': 'adobe.com',
    'Lightroom': 'adobe.com',
    'XD': 'adobe.com',
    'Acrobat': 'adobe.com',
    'Dreamweaver': 'adobe.com',
    'Animate': 'adobe.com',
    'Affinity Designer': 'affinity.serif.com',
    'Affinity Photo': 'affinity.serif.com',
    'Affinity Publisher': 'affinity.serif.com',
    'CorelDRAW': 'coreldraw.com',
    'GIMP': 'gimp.org',
    'Inkscape': 'inkscape.org',
    'Blender': 'blender.org',
    'DaVinci Resolve': 'blackmagicdesign.com',
    'Final Cut Pro': 'apple.com',
    'Camtasia': 'techsmith.com',
    'ScreenFlow': 'telestream.net',
    'Snagit': 'techsmith.com',
    'OBS Studio': 'obsproject.com',
    'Streamlabs': 'streamlabs.com',
    'XSplit': 'xsplit.com',
    'CloudApp': 'getcloudapp.com',
    'Droplr': 'droplr.com',
    'Monosnap': 'monosnap.com',
    'Lightshot': 'app.prntscr.com',
    'ShareX': 'getsharex.com',
    'Greenshot': 'getgreenshot.org',
    'QuickTime': 'apple.com',
    'VLC': 'videolan.org',
    'Audacity': 'audacityteam.org',
    'GarageBand': 'apple.com',
    'Logic Pro': 'apple.com',
    'Pro Tools': 'avid.com',
    'Ableton Live': 'ableton.com',
    'FL Studio': 'image-line.com',
    'Cubase': 'steinberg.net',
    'Studio One': 'presonus.com',
    'Reaper': 'reaper.fm',
    'Bitwig': 'bitwig.com',
    'Reason': 'reasonstudios.com',
    'Splice': 'splice.com',
    'Soundtrap': 'soundtrap.com',
    'BandLab': 'bandlab.com',
    'Audiotool': 'audiotool.com',
    'Soundation': 'soundation.com',
    'SurveyMonkey': 'surveymonkey.com',
    'Qualtrics': 'qualtrics.com',
    'SurveyGizmo': 'surveygizmo.com',
    'Alchemer': 'alchemer.com',
    'Google Surveys': 'surveys.google.com',
    'Poll Everywhere': 'polleverywhere.com',
    'Mentimeter': 'mentimeter.com',
    'Slido': 'slido.com',
    'AhaSlides': 'ahaslides.com',
    'Vevox': 'vevox.com',
    'Canva Pro': 'canva.com',
    'Claude': 'anthropic.com',
    'Midjourney': 'midjourney.com',
    'DALL-E': 'openai.com',
    'Stable Diffusion': 'stability.ai',
    'ChatSonic': 'writesonic.com',
    'Perplexity': 'perplexity.ai',
    'You.com': 'you.com',
    'Bard': 'bard.google.com',
    'Character.AI': 'character.ai',
    'Replika': 'replika.ai',
    'Synthesia': 'synthesia.io',
    'Descript': 'descript.com',
    'Runway': 'runwayml.com',
    'Pictory': 'pictory.ai',
    'InVideo': 'invideo.io',
    'Synthesia AI': 'synthesia.io',
    'Murf AI': 'murf.ai',
    'Play.ht': 'play.ht',
    'Resemble AI': 'resemble.ai',
    'WellSaid': 'wellsaidlabs.com',
    'Replica': 'replicastudios.com',
    'ElevenLabs': 'elevenlabs.io',
    'Speechify': 'speechify.com',
    'NaturalReader': 'naturalreaders.com',
    'Voice Dream': 'voicedream.com',
    'Read Aloud': 'readaloud.app',
    'Balabolka': 'cross-plus-a.com',
    'TTSReader': 'ttsreader.com',
    'From Text to Speech': 'fromtexttospeech.com',
    'Text2Speech': 'text2speech.org',
    'iSpeech': 'ispeech.org',
    'Responsive Voice': 'responsivevoice.org',
    'Acapela': 'acapela-group.com',
    'CereProc': 'cereproc.com',
    'ReadSpeaker': 'readspeaker.com',
    'Nuance': 'nuance.com',
    'Amazon Polly': 'aws.amazon.com',
    'Google Text-to-Speech': 'cloud.google.com',
    'Microsoft Azure': 'azure.microsoft.com',
    'IBM Watson': 'ibm.com',
    'Twilio': 'twilio.com',
    'SendGrid': 'sendgrid.com',
    'Mailgun': 'mailgun.com',
    'Postmark': 'postmarkapp.com',
    'SparkPost': 'sparkpost.com',
    'Amazon SES': 'aws.amazon.com',
    'Mandrill': 'mailchimp.com',
    'Elastic Email': 'elasticemail.com',
    'SocketLabs': 'socketlabs.com',
    'Pepipost': 'pepipost.com',
    'Stripe': 'stripe.com',
    'PayPal': 'paypal.com',
    'Square': 'squareup.com',
    'Braintree': 'braintreepayments.com',
    'Authorize.Net': 'authorize.net',
    '2Checkout': '2checkout.com',
    'Adyen': 'adyen.com',
    'Worldpay': 'worldpay.com',
    'Klarna': 'klarna.com',
    'Afterpay': 'afterpay.com',
    'Xero': 'xero.com',
    'QuickBooks': 'quickbooks.intuit.com',
    'FreshBooks': 'freshbooks.com',
    'Wave': 'waveapps.com',
    'Sage': 'sage.com',
    'Bench': 'bench.co',
    'ZipBooks': 'zipbooks.com',
    'Invoice2go': 'invoice2go.com',
    'Invoicely': 'invoicely.com',
    'Zoho Books': 'zoho.com',
    'Gusto': 'gusto.com',
    'ADP': 'adp.com',
    'Paychex': 'paychex.com',
    'Paylocity': 'paylocity.com',
    'BambooHR': 'bamboohr.com',
    'Workday': 'workday.com',
    'Namely': 'namely.com',
    'Zenefits': 'zenefits.com',
    'Rippling': 'rippling.com',
    'Justworks': 'justworks.com',
    'Toggl': 'toggl.com',
    'Harvest': 'getharvest.com',
    'Clockify': 'clockify.me',
    'RescueTime': 'rescuetime.com',
    'Timely': 'timelyapp.com',
    'Everhour': 'everhour.com',
    'Hubstaff': 'hubstaff.com',
    'Time Doctor': 'timedoctor.com',
    'DeskTime': 'desktime.com',
    'ActivTrak': 'activtrak.com',
    'Grammarly Business': 'grammarly.com',
    'Hemingway Editor': 'hemingwayapp.com',
    'Writeful': 'writeful.com',
    'Ludwig': 'ludwig.guru',
    'Reverso': 'reverso.net',
    'DeepL': 'deepl.com',
    'Google Translate': 'translate.google.com',
    'Microsoft Translator': 'translator.microsoft.com',
    'iTranslate': 'itranslate.com',
    'Translate.com': 'translate.com',
    'Moz Pro': 'moz.com',
    'SurferSEO': 'surferseo.com',
    'Clearscope': 'clearscope.io',
    'MarketMuse': 'marketmuse.com',
    'Frase': 'frase.io',
    'Page Optimizer Pro': 'pageoptimizer.pro',
    'SEO PowerSuite': 'seopowersuite.com',
    'WebCEO': 'webceo.com',
    'RankActive': 'rankactive.com',
    'Authority Labs': 'authoritylabs.com',
    'AgencyAnalytics': 'agencyanalytics.com',
    'SEOptimer': 'seoptimer.com',
    'Raven Tools': 'raventools.com',
    'CognitiveSEO': 'cognitiveseo.com',
    'LinkResearchTools': 'linkresearchtools.com',
    'Monitor Backlinks': 'monitorbacklinks.com',
    'SEO SpyGlass': 'seopowersuite.com',
    'BuzzSumo': 'buzzsumo.com',
    'Mention': 'mention.com',
    'Brand24': 'brand24.com',
    'Awario': 'awario.com',
    'Talkwalker': 'talkwalker.com',
    'Brandwatch': 'brandwatch.com',
    'Sprinklr': 'sprinklr.com',
    'Meltwater': 'meltwater.com',
    'Cision': 'cision.com',
    'Critical Mention': 'criticalmention.com',
    'Headlime': 'headlime.com',
    'Copysmith': 'copysmith.ai',
    'Makerwords': 'makerwords.com',
    'Pathmatics': 'pathmatics.com',
    'Craiyon': 'craiyon.com',
    'Crazyegg': 'crazyegg.com',
    'Aftership': 'aftership.com',
    'Neontools': 'neontools.com',
    'Safeopt': 'safeopt.com',
    'Adflex': 'adflex.com',
    'Elai': 'elai.io',
    'Yepic Ai': 'yepic.ai',
    'Voicepen Ai': 'voicepen.ai',
    'Spocket': 'spocket.co',
    'Nbzfinder': 'nbzfinder.com',
    'Sitechecker': 'sitechecker.pro',
    'Tubics': 'tubics.com',
    'Micmonster': 'micmonster.com',
    'Shotcut': 'shotcut.org',
    'Humantalk': 'humantalk.ai',
    'Voicely': 'voicely.com',
    'Revideo Pro': 'revideo.pro',
    'Voicetapp': 'voicetapp.com',
    'Originality Ai': 'originality.ai',
    'Creattie': 'creattie.com',
    'Thestockfootageclub': 'thestockfootageclub.com',
    'Tubertools': 'tubertools.com',
    'Notta': 'notta.ai',
    'Videocreator': 'videocreator.com',
    'Animaker': 'animaker.com',
    'Illustroke': 'illustroke.com',
    'Picnie': 'picnie.com',
    'Plasfy': 'plasfy.com',
    'Artspace': 'artspace.com',
    'Bloomreach': 'bloomreach.com',
    'Airbrush': 'airbrush.com',
    'Pixteller': 'pixteller.com',
    'Contentstudio': 'contentstudio.io',
    'Easil': 'easil.com',
    'Designrr': 'designrr.io',
    'Voila': 'voila.ai',
    'Yarnit': 'yarnit.app',
    'Shopia': 'shopia.ai',
    'Fliki': 'fliki.ai',
    'Udio': 'udio.com',
  };
  
  // First check if exact match exists in logoMap
  if (logoMap[toolName]) {
    return logoMap[toolName];
  }
  
  // If not found, try to create a sensible domain from the tool name
  // Remove common suffixes and special characters
  const cleanName = toolName
    .toLowerCase()
    .replace(/\s+group\s+buy/gi, '')  // Remove "Group Buy"
    .replace(/\s+ai$/gi, '')           // Remove trailing "AI"
    .replace(/\s+pro$/gi, '')          // Remove trailing "Pro"
    .trim()
    .replace(/\s+/g, '')               // Remove spaces
    .replace(/[^a-z0-9]/g, '');        // Remove special characters
  
  return cleanName + '.com';
};

// Helper function to calculate pricing
const getDefaultPricing = (monthlyPrice: number) => ({
  '1': monthlyPrice,
  '3': Math.round(monthlyPrice * 2.8 * 100) / 100,
  '6': Math.round(monthlyPrice * 5.4 * 100) / 100,
  '12': Math.round(monthlyPrice * 10.4 * 100) / 100
});

// All 624 tools data
const toolsData = [
  {
    name: 'Rafflepress Group Buy',
    logo: 'Rafflepress',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Headlime Group Buy',
    logo: 'Headlime',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Copysmith Group Buy',
    logo: 'Copysmith',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Makerwords Group Buy',
    logo: 'Makerwords',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔤'
  },
  {
    name: 'Pathmatics Group Buy',
    logo: 'Pathmatics',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Craiyon Group Buy',
    logo: 'Craiyon',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Klue Group Buy',
    logo: 'Klue',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Editby Group Buy',
    logo: 'Editby',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✏️'
  },
  {
    name: 'Sellerlabs Group Buy',
    logo: 'Sellerlabs',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🏪'
  },
  {
    name: 'Teikametrics Group Buy',
    logo: 'Teikametrics',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📈'
  },
  {
    name: 'Datahawk Group Buy',
    logo: 'Datahawk',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🦅'
  },
  {
    name: 'Getkeywords Group Buy',
    logo: 'Getkeywords',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔑'
  },
  {
    name: 'Socialpilot Group Buy',
    logo: 'Socialpilot',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✈️'
  },
  {
    name: 'Brightpearl Group Buy',
    logo: 'Brightpearl',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💎'
  },
  {
    name: 'Commerceiq Group Buy',
    logo: 'Commerceiq',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🧠'
  },
  {
    name: 'Sellercloud Group Buy',
    logo: 'Sellercloud',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '☁️'
  },
  {
    name: 'Amplitude Group Buy',
    logo: 'Amplitude',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Pollo Ai Group Buy',
    logo: 'Pollo Ai',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Stackline Group Buy',
    logo: 'Stackline',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Cymbio Group Buy',
    logo: 'Cymbio',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔗'
  },
  {
    name: 'Seobase Group Buy',
    logo: 'Seobase',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Mixpanel Group Buy',
    logo: 'Mixpanel',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Glassbox Group Buy',
    logo: 'Glassbox',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📱'
  },
  {
    name: 'Salesdoe Group Buy',
    logo: 'Salesdoe',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💰'
  },
  {
    name: 'Pedris Group Buy',
    logo: 'Pedris',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Adroll Group Buy',
    logo: 'Adroll',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📢'
  },
  {
    name: 'Moovly Group Buy',
    logo: 'Moovly',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Createstudio Group Buy',
    logo: 'Createstudio',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Doodlemaker Group Buy',
    logo: 'Doodlemaker',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✏️'
  },
  {
    name: 'Toonly Group Buy',
    logo: 'Toonly',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎭'
  },
  {
    name: 'Rask Ai Group Buy',
    logo: 'Rask Ai',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Seominion Group Buy',
    logo: 'Seominion',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '👑'
  },
  {
    name: 'D Id Group Buy',
    logo: 'D Id',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🆔'
  },
  {
    name: 'Aistudios Group Buy',
    logo: 'Aistudios',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Hourone Group Buy',
    logo: 'Hourone',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⏰'
  },
  {
    name: 'Kartapult Group Buy',
    logo: 'Kartapult',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🚀'
  },
  {
    name: 'Icomoon Group Buy',
    logo: 'Icomoon',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌙'
  },
  {
    name: 'Rankwatch Group Buy',
    logo: 'Rankwatch',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '👁️'
  },
  {
    name: 'Brandcrowd Group Buy',
    logo: 'Brandcrowd',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '👥'
  },
  {
    name: 'Designevo Group Buy',
    logo: 'Designevo',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Linksnappy Group Buy',
    logo: 'Linksnappy',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔗'
  },
  {
    name: 'Snappa Group Buy',
    logo: 'Snappa',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Fullstory Group Buy',
    logo: 'Fullstory',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Smartlook Group Buy',
    logo: 'Smartlook',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '👁️'
  },
  {
    name: 'Themegrill Group Buy',
    logo: 'Themegrill',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔥'
  },
  {
    name: '24symbols Group Buy',
    logo: '24symbols',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📚'
  },
  {
    name: 'Bookmate Group Buy',
    logo: 'Bookmate',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📖'
  },
  {
    name: 'Gpl Market Group Buy',
    logo: 'Gpl Market',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛒'
  },
  {
    name: 'Plugintheme Group Buy',
    logo: 'Plugintheme',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔌'
  },
  {
    name: 'Crazyegg Group Buy',
    logo: 'Crazyegg',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🥚'
  },
  {
    name: 'Aftership Group Buy',
    logo: 'Aftership',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📦'
  },
  {
    name: 'Neontools Group Buy',
    logo: 'Neontools',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💡'
  },
  {
    name: 'Safeopt Group Buy',
    logo: 'Safeopt',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛡️'
  },
  {
    name: 'Route Group Buy',
    logo: 'Route',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛣️'
  },
  {
    name: 'Adflex Group Buy',
    logo: 'Adflex',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📢'
  },
  {
    name: 'Elai Group Buy',
    logo: 'Elai',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Yepic Ai Group Buy',
    logo: 'Yepic Ai',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Socialbee Group Buy',
    logo: 'Socialbee',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🐝'
  },
  {
    name: 'Voicepen Ai Group Buy',
    logo: 'Voicepen Ai',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Spocket Group Buy',
    logo: 'Spocket',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🚀'
  },
  {
    name: 'Nbzfinder Group Buy',
    logo: 'Nbzfinder',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Sitechecker Group Buy',
    logo: 'Sitechecker',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✅'
  },
  {
    name: 'Tubics Group Buy',
    logo: 'Tubics',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📺'
  },
  {
    name: 'Micmonster Group Buy',
    logo: 'Micmonster',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎤'
  },
  {
    name: 'Shotcut Group Buy',
    logo: 'Shotcut',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✂️'
  },
  {
    name: 'Humantalk Group Buy',
    logo: 'Humantalk',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💬'
  },
  {
    name: 'Voicely Group Buy',
    logo: 'Voicely',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎵'
  },
  {
    name: 'Revideo Pro Group Buy',
    logo: 'Revideo Pro',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Hotspot Shield Group Buy',
    logo: 'Hotspot Shield',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛡️'
  },
  {
    name: 'Voicetapp Group Buy',
    logo: 'Voicetapp',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📱'
  },
  {
    name: 'Originality Ai Group Buy',
    logo: 'Originality Ai',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✨'
  },
  {
    name: 'Wistia Group Buy',
    logo: 'Wistia',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📹'
  },
  {
    name: 'Creattie Group Buy',
    logo: 'Creattie',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Thestockfootageclub Group Buy',
    logo: 'Thestockfootageclub',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎞️'
  },
  {
    name: 'Tubertools Group Buy',
    logo: 'Tubertools',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔧'
  },
  {
    name: 'Notta Group Buy',
    logo: 'Notta',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Videocreator Group Buy',
    logo: 'Videocreator',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎥'
  },
  {
    name: 'Pipedrive Group Buy',
    logo: 'Pipedrive',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Mailchimp Group Buy',
    logo: 'Mailchimp',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📧'
  },
  {
    name: 'Salesforce Group Buy',
    logo: 'Salesforce',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '☁️'
  },
  {
    name: 'Coreldraw Group Buy',
    logo: 'Coreldraw',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Animaker Group Buy',
    logo: 'Animaker',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Illustroke Group Buy',
    logo: 'Illustroke',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🖼️'
  },
  {
    name: 'Picnie Group Buy',
    logo: 'Picnie',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Plasfy Group Buy',
    logo: 'Plasfy',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎭'
  },
  {
    name: 'Artspace Group Buy',
    logo: 'Artspace',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🖼️'
  },
  {
    name: 'Camtasia Group Buy',
    logo: 'Camtasia',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎥'
  },
  {
    name: 'Bloomreach Group Buy',
    logo: 'Bloomreach',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌱'
  },
  {
    name: 'Tidio Group Buy',
    logo: 'Tidio',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💬'
  },
  {
    name: 'Airbrush Group Buy',
    logo: 'Airbrush',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🖌️'
  },
  {
    name: 'Pixteller Group Buy',
    logo: 'Pixteller',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Contentstudio Group Buy',
    logo: 'Contentstudio',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📰'
  },
  {
    name: 'Easil Group Buy',
    logo: 'Easil',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Designrr Group Buy',
    logo: 'Designrr',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📖'
  },
  {
    name: 'Voila Group Buy',
    logo: 'Voila',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✨'
  },
  {
    name: 'Yarnit Group Buy',
    logo: 'Yarnit',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🧶'
  },
  {
    name: 'Shopia Group Buy',
    logo: 'Shopia',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛍️'
  },
  {
    name: 'Fliki Group Buy',
    logo: 'Fliki',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Udio Group Buy',
    logo: 'Udio',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎵'
  },
  {
    name: 'Hubspot Group Buy',
    logo: 'Hubspot',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Zoho Group Buy',
    logo: 'Zoho',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🏢'
  },
  {
    name: 'Sitebulb Group Buy',
    logo: 'Sitebulb',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💡'
  },
  {
    name: 'Keywordwatchdog Group Buy',
    logo: 'Keywordwatchdog',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🐕'
  },
  {
    name: 'Bishopi Group Buy',
    logo: 'Bishopi',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '♟️'
  },
  {
    name: 'Webgility Group Buy',
    logo: 'Webgility',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Vistacreate Group Buy',
    logo: 'Vistacreate',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Visme Group Buy',
    logo: 'Visme',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Feedonomics Group Buy',
    logo: 'Feedonomics',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📈'
  },
  {
    name: 'Contentvillain Group Buy',
    logo: 'Contentvillain',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '😈'
  },
  {
    name: 'Contentbot Group Buy',
    logo: 'Contentbot',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Copyleaks Group Buy',
    logo: 'Copyleaks',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Thundercontent Group Buy',
    logo: 'Thundercontent',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⚡'
  },
  {
    name: 'Marketingcopy Group Buy',
    logo: 'Marketingcopy',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Unlimphotos Group Buy',
    logo: 'Unlimphotos',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Profitplay Group Buy',
    logo: 'Profitplay',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💰'
  },
  {
    name: 'Inboxsumo Group Buy',
    logo: 'Inboxsumo',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📧'
  },
  {
    name: 'Scriptdio Group Buy',
    logo: 'Scriptdio',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📜'
  },
  {
    name: 'Pursueapp Group Buy',
    logo: 'Pursueapp',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Bookbeam Group Buy',
    logo: 'Bookbeam',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📚'
  },
  {
    name: 'Eventin Group Buy',
    logo: 'Eventin',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📅'
  },
  {
    name: 'Aithor Group Buy',
    logo: 'Aithor',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Videvo Group Buy',
    logo: 'Videvo',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Suno Group Buy',
    logo: 'Suno',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '☀️'
  },
  {
    name: 'Exactlinks Group Buy',
    logo: 'Exactlinks',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔗'
  },
  {
    name: 'Elegantthemes Group Buy',
    logo: 'Elegantthemes',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Textbuilder Group Buy',
    logo: 'Textbuilder',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Gocharlie Group Buy',
    logo: 'Gocharlie',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Taplio Group Buy',
    logo: 'Taplio',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💼'
  },
  {
    name: 'Strell Group Buy',
    logo: 'Strell',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📱'
  },
  {
    name: 'Outranking Group Buy',
    logo: 'Outranking',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📈'
  },
  {
    name: 'Thieve Group Buy',
    logo: 'Thieve',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛍️'
  },
  {
    name: 'Gingersoftware Group Buy',
    logo: 'Gingersoftware',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Word Spinner Group Buy',
    logo: 'Word Spinner',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌀'
  },
  {
    name: 'Audiojourney Group Buy',
    logo: 'Audiojourney',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎵'
  },
  {
    name: 'Doodleoze Group Buy',
    logo: 'Doodleoze',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✏️'
  },
  {
    name: 'Jitter Group Buy',
    logo: 'Jitter',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⚡'
  },
  {
    name: 'Craftinspector Group Buy',
    logo: 'Craftinspector',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Spypro Group Buy',
    logo: 'Spypro',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕵️'
  },
  {
    name: 'Sonyliv Group Buy',
    logo: 'Sonyliv',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📺'
  },
  {
    name: 'Hulu Group Buy',
    logo: 'Hulu',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📺'
  },
  {
    name: 'Hotstar Group Buy',
    logo: 'Hotstar',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⭐'
  },
  {
    name: 'Max Group Buy',
    logo: 'Max',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📺'
  },
  {
    name: 'Spotify Group Buy',
    logo: 'Spotify',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎵'
  },
  {
    name: 'Prime Video Group Buy',
    logo: 'Prime Video',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📺'
  },
  {
    name: 'Merchninja Group Buy',
    logo: 'Merchninja',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🥷'
  },
  {
    name: 'Erank Group Buy',
    logo: 'Erank',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Alishark Group Buy',
    logo: 'Alishark',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🦈'
  },
  {
    name: 'Photokit Group Buy',
    logo: 'Photokit',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Rawpixel Group Buy',
    logo: 'Rawpixel',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🖼️'
  },
  {
    name: 'Alamy Group Buy',
    logo: 'Alamy',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📷'
  },
  {
    name: 'Mockupcloud Group Buy',
    logo: 'Mockupcloud',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '☁️'
  },
  {
    name: 'Productioncrate Group Buy',
    logo: 'Productioncrate',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📦'
  },
  {
    name: 'Pixelsquid Group Buy',
    logo: 'Pixelsquid',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🐙'
  },
  {
    name: 'Pixeden Group Buy',
    logo: 'Pixeden',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Deeezy Group Buy',
    logo: 'Deeezy',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Pixelbuddha Group Buy',
    logo: 'Pixelbuddha',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🧘'
  },
  {
    name: 'Motion Elements Group Buy',
    logo: 'Motion Elements',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Notion Group Buy',
    logo: 'Notion',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Droppoint Group Buy',
    logo: 'Droppoint',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📍'
  },
  {
    name: 'Mailzilo Group Buy',
    logo: 'Mailzilo',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📧'
  },
  {
    name: 'Metabox Group Buy',
    logo: 'Metabox',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📦'
  },
  {
    name: 'Shoplus Group Buy',
    logo: 'Shoplus',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛍️'
  },
  {
    name: 'Craftwork Design Group Buy',
    logo: 'Craftwork Design',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Vectorstock Group Buy',
    logo: 'Vectorstock',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📐'
  },
  {
    name: 'Copyblocks Group Buy',
    logo: 'Copyblocks',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Creativefabrica Group Buy',
    logo: 'Creativefabrica',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Artgrid Group Buy',
    logo: 'Artgrid',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🖼️'
  },
  {
    name: 'Artlist Group Buy',
    logo: 'Artlist',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎵'
  },
  {
    name: 'Depositphotos Group Buy',
    logo: 'Depositphotos',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Yellow Images Group Buy',
    logo: 'Yellow Images',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🖼️'
  },
  {
    name: 'Rewardbanx Group Buy',
    logo: 'Rewardbanx',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎁'
  },
  {
    name: 'Blogely Group Buy',
    logo: 'Blogely',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Snappify Group Buy',
    logo: 'Snappify',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Markopolo Group Buy',
    logo: 'Markopolo',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Dreamstime Group Buy',
    logo: 'Dreamstime',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💭'
  },
  {
    name: 'Soundstripe Group Buy',
    logo: 'Soundstripe',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎵'
  },
  {
    name: 'Designi Group Buy',
    logo: 'Designi',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Istock Group Buy',
    logo: 'Istock',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Private Internet Access Group Buy',
    logo: 'Private Internet Access',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔒'
  },
  {
    name: 'Hma Vpn Group Buy',
    logo: 'Hma Vpn',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛡️'
  },
  {
    name: 'Nordvpn Group Buy',
    logo: 'Nordvpn',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌐'
  },
  {
    name: 'Windscribe Group Buy',
    logo: 'Windscribe',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💨'
  },
  {
    name: 'Ecomchef Group Buy',
    logo: 'Ecomchef',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '👨‍🍳'
  },
  {
    name: 'Pinflux Group Buy',
    logo: 'Pinflux',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📌'
  },
  {
    name: 'Appowls Group Buy',
    logo: 'Appowls',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🦉'
  },
  {
    name: 'Seo Press Group Buy',
    logo: 'Seo Press',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📰'
  },
  {
    name: 'Gamma Ai Group Buy',
    logo: 'Gamma Ai',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Scite Ai Group Buy',
    logo: 'Scite Ai',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔬'
  },
  {
    name: 'Relume Group Buy',
    logo: 'Relume',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💡'
  },
  {
    name: 'Jobscan Group Buy',
    logo: 'Jobscan',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Surfshark Group Buy',
    logo: 'Surfshark',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🦈'
  },
  {
    name: 'Smodin Group Buy',
    logo: 'Smodin',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Slidebean Group Buy',
    logo: 'Slidebean',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Lex Page Group Buy',
    logo: 'Lex Page',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📄'
  },
  {
    name: 'Leadsrecon Group Buy',
    logo: 'Leadsrecon',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Rabbit Loader Group Buy',
    logo: 'Rabbit Loader',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🐰'
  },
  {
    name: 'Chopcast Group Buy',
    logo: 'Chopcast',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✂️'
  },
  {
    name: 'Design Bundles Group Buy',
    logo: 'Design Bundles',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Fluent Forms Group Buy',
    logo: 'Fluent Forms',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Growthbarseo Group Buy',
    logo: 'Growthbarseo',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📈'
  },
  {
    name: 'Writecream Group Buy',
    logo: 'Writecream',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Neuronwriter Group Buy',
    logo: 'Neuronwriter',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🧠'
  },
  {
    name: 'Iconscout Group Buy',
    logo: 'Iconscout',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Coursera Group Buy',
    logo: 'Coursera',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎓'
  },
  {
    name: 'Pikbest Group Buy',
    logo: 'Pikbest',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Textmetrics Group Buy',
    logo: 'Textmetrics',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Humanpal Group Buy',
    logo: 'Humanpal',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '👥'
  },
  {
    name: 'Writehuman Group Buy',
    logo: 'Writehuman',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Prettymerch Group Buy',
    logo: 'Prettymerch',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛍️'
  },
  {
    name: 'Contentpace Group Buy',
    logo: 'Contentpace',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⚡'
  },
  {
    name: 'Gptzero Me Group Buy',
    logo: 'Gptzero Me',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Toons Ai Group Buy',
    logo: 'Toons Ai',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎭'
  },
  {
    name: 'Sketchgenius Group Buy',
    logo: 'Sketchgenius',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✏️'
  },
  {
    name: 'Pixlr Group Buy',
    logo: 'Pixlr',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Dezygn Group Buy',
    logo: 'Dezygn',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Supermachine Art Group Buy',
    logo: 'Supermachine Art',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Keywordsearch Group Buy',
    logo: 'Keywordsearch',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Vizard Ai Group Buy',
    logo: 'Vizard Ai',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Keepa Group Buy',
    logo: 'Keepa',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Switchy Group Buy',
    logo: 'Switchy',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔄'
  },
  {
    name: 'Descript Group Buy',
    logo: 'Descript',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎵'
  },
  {
    name: 'Monica Im Group Buy',
    logo: 'Monica Im',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Anyword Group Buy',
    logo: 'Anyword',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Resemble Ai Group Buy',
    logo: 'Resemble Ai',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎤'
  },
  {
    name: 'Pin Generator Group Buy',
    logo: 'Pin Generator',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📌'
  },
  {
    name: 'Lexica Group Buy',
    logo: 'Lexica',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Pluralsight Group Buy',
    logo: 'Pluralsight',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎓'
  },
  {
    name: 'Snackeet Group Buy',
    logo: 'Snackeet',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📱'
  },
  {
    name: 'Writefull Group Buy',
    logo: 'Writefull',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Uizard Group Buy',
    logo: 'Uizard',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Rivalflow Group Buy',
    logo: 'Rivalflow',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌊'
  },
  {
    name: 'Popai Group Buy',
    logo: 'Popai',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Afterlib Group Buy',
    logo: 'Afterlib',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📚'
  },
  {
    name: 'Designbeast Group Buy',
    logo: 'Designbeast',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Chatllm Group Buy',
    logo: 'Chatllm',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💬'
  },
  {
    name: 'Shortform Group Buy',
    logo: 'Shortform',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Copyspace Group Buy',
    logo: 'Copyspace',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Leadpal Group Buy',
    logo: 'Leadpal',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Phrasly Group Buy',
    logo: 'Phrasly',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📝'
  },
  {
    name: 'Prezi Group Buy',
    logo: 'Prezi',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Fomo Clips Group Buy',
    logo: 'Fomo Clips',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Boolvideo Group Buy',
    logo: 'Boolvideo',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎥'
  },
  {
    name: 'Beautiful Ai Group Buy',
    logo: 'Beautiful Ai',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✨'
  },
  {
    name: 'Crunchbase Group Buy',
    logo: 'Crunchbase',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🏢'
  },
  {
    name: 'Machined Ai Group Buy',
    logo: 'Machined Ai',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Sellerassistant Group Buy',
    logo: 'Sellerassistant',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛍️'
  },
  {
    name: '123rf Group Buy',
    logo: '123rf',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📸'
  },
  {
    name: 'Seowriting Ai Group Buy',
    logo: 'Seowriting Ai',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Minvo Group Buy',
    logo: 'Minvo',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Copilot Ai Group Buy',
    logo: 'Copilot Ai',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Harpa Ai Group Buy',
    logo: 'Harpa Ai',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Tacticalarbitrage Group Buy',
    logo: 'Tacticalarbitrage',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Revseller Group Buy',
    logo: 'Revseller',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💰'
  },
  {
    name: 'Egrow Group Buy',
    logo: 'Egrow',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📈'
  },
  {
    name: 'Selleramp Group Buy',
    logo: 'Selleramp',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🚀'
  },
  {
    name: 'Scan Unlimited Group Buy',
    logo: 'Scan Unlimited',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Everbee Group Buy',
    logo: 'Everbee',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🐝'
  },
  {
    name: 'Revoicer Group Buy',
    logo: 'Revoicer',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎤'
  },
  {
    name: 'Turboscribe Group Buy',
    logo: 'Turboscribe',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '✍️'
  },
  {
    name: 'Clickmagick Group Buy',
    logo: 'Clickmagick',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎯'
  },
  {
    name: 'Voicemaker Group Buy',
    logo: 'Voicemaker',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎤'
  },
  {
    name: 'Educative Group Buy',
    logo: 'Educative',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎓'
  },
  {
    name: 'Deepl Group Buy',
    logo: 'Deepl',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌐'
  },
  {
    name: 'Deepbrid Group Buy',
    logo: 'Deepbrid',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌉'
  },
  {
    name: 'Buzz Stream Group Buy',
    logo: 'Buzz Stream',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📢'
  },
  {
    name: 'Copyscape Group Buy',
    logo: 'Copyscape',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Keywords Everywhere Group Buy',
    logo: 'Keywords Everywhere',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔑'
  },
  {
    name: 'Codecademy Group Buy',
    logo: 'Codecademy',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '💻'
  },
  {
    name: 'Gravitec Group Buy',
    logo: 'Gravitec',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📱'
  },
  {
    name: 'Teespy Group Buy',
    logo: 'Teespy',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '👕'
  },
  {
    name: 'Wowoptin Group Buy',
    logo: 'Wowoptin',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📧'
  },
  {
    name: 'Podly Group Buy',
    logo: 'Podly',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎙️'
  },
  {
    name: 'Blocksy Group Buy',
    logo: 'Blocksy',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🧱'
  },
  {
    name: 'Adplexity Video Group Buy',
    logo: 'Adplexity Video',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎬'
  },
  {
    name: 'Adplexity Adult Group Buy',
    logo: 'Adplexity Adult',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔞'
  },
  {
    name: 'Adplexity Mobile Group Buy',
    logo: 'Adplexity Mobile',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📱'
  },
  {
    name: 'Adplexity Push Group Buy',
    logo: 'Adplexity Push',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📢'
  },
  {
    name: 'Adplexity Desktop Group Buy',
    logo: 'Adplexity Desktop',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🖥️'
  },
  {
    name: 'Adplexity Native Group Buy',
    logo: 'Adplexity Native',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🌐'
  },
  {
    name: 'Brizy Group Buy',
    logo: 'Brizy',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🎨'
  },
  {
    name: 'Indexjet Group Buy',
    logo: 'Indexjet',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🚀'
  },
  {
    name: 'Berqwp Group Buy',
    logo: 'Berqwp',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '⚡'
  },
  {
    name: 'Bitsocial Group Buy',
    logo: 'Bitsocial',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📱'
  },
  {
    name: 'Hexomatic Group Buy',
    logo: 'Hexomatic',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔧'
  },
  {
    name: 'Alliai Group Buy',
    logo: 'Alliai',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🤖'
  },
  {
    name: 'Algopix Group Buy',
    logo: 'Algopix',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '📊'
  },
  {
    name: 'Adspy Group Buy',
    logo: 'Adspy',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕵️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adheart Group Buy',
    logo: 'Adheart',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '❤️'
  },
  {
    name: 'Adbeat Group Buy',
    logo: 'Adbeat',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🥁'
  },
  {
    name: 'Adclarity Group Buy',
    logo: 'Adclarity',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🔍'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Adspyder Group Buy',
    logo: 'Adspyder',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🕷️'
  },
  {
    name: 'Tool 1 Group Buy',
    logo: 'Tool 1',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 2 Group Buy',
    logo: 'Tool 2',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 3 Group Buy',
    logo: 'Tool 3',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 4 Group Buy',
    logo: 'Tool 4',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 5 Group Buy',
    logo: 'Tool 5',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 6 Group Buy',
    logo: 'Tool 6',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 7 Group Buy',
    logo: 'Tool 7',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 8 Group Buy',
    logo: 'Tool 8',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 9 Group Buy',
    logo: 'Tool 9',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 10 Group Buy',
    logo: 'Tool 10',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 11 Group Buy',
    logo: 'Tool 11',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 12 Group Buy',
    logo: 'Tool 12',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 13 Group Buy',
    logo: 'Tool 13',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 14 Group Buy',
    logo: 'Tool 14',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 15 Group Buy',
    logo: 'Tool 15',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 16 Group Buy',
    logo: 'Tool 16',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 17 Group Buy',
    logo: 'Tool 17',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 18 Group Buy',
    logo: 'Tool 18',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 19 Group Buy',
    logo: 'Tool 19',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 20 Group Buy',
    logo: 'Tool 20',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 21 Group Buy',
    logo: 'Tool 21',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 22 Group Buy',
    logo: 'Tool 22',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 23 Group Buy',
    logo: 'Tool 23',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 24 Group Buy',
    logo: 'Tool 24',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 25 Group Buy',
    logo: 'Tool 25',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 26 Group Buy',
    logo: 'Tool 26',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 27 Group Buy',
    logo: 'Tool 27',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 28 Group Buy',
    logo: 'Tool 28',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 29 Group Buy',
    logo: 'Tool 29',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 30 Group Buy',
    logo: 'Tool 30',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 31 Group Buy',
    logo: 'Tool 31',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 32 Group Buy',
    logo: 'Tool 32',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 33 Group Buy',
    logo: 'Tool 33',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 34 Group Buy',
    logo: 'Tool 34',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 35 Group Buy',
    logo: 'Tool 35',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 36 Group Buy',
    logo: 'Tool 36',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 37 Group Buy',
    logo: 'Tool 37',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 38 Group Buy',
    logo: 'Tool 38',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 39 Group Buy',
    logo: 'Tool 39',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 40 Group Buy',
    logo: 'Tool 40',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 41 Group Buy',
    logo: 'Tool 41',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 42 Group Buy',
    logo: 'Tool 42',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 43 Group Buy',
    logo: 'Tool 43',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 44 Group Buy',
    logo: 'Tool 44',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 45 Group Buy',
    logo: 'Tool 45',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 46 Group Buy',
    logo: 'Tool 46',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 47 Group Buy',
    logo: 'Tool 47',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 48 Group Buy',
    logo: 'Tool 48',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 49 Group Buy',
    logo: 'Tool 49',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 50 Group Buy',
    logo: 'Tool 50',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 51 Group Buy',
    logo: 'Tool 51',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 52 Group Buy',
    logo: 'Tool 52',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 53 Group Buy',
    logo: 'Tool 53',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 54 Group Buy',
    logo: 'Tool 54',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 55 Group Buy',
    logo: 'Tool 55',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 56 Group Buy',
    logo: 'Tool 56',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 57 Group Buy',
    logo: 'Tool 57',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 58 Group Buy',
    logo: 'Tool 58',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 59 Group Buy',
    logo: 'Tool 59',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 60 Group Buy',
    logo: 'Tool 60',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 61 Group Buy',
    logo: 'Tool 61',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 62 Group Buy',
    logo: 'Tool 62',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 63 Group Buy',
    logo: 'Tool 63',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 64 Group Buy',
    logo: 'Tool 64',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 65 Group Buy',
    logo: 'Tool 65',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 66 Group Buy',
    logo: 'Tool 66',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 67 Group Buy',
    logo: 'Tool 67',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 68 Group Buy',
    logo: 'Tool 68',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 69 Group Buy',
    logo: 'Tool 69',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 70 Group Buy',
    logo: 'Tool 70',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 71 Group Buy',
    logo: 'Tool 71',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 72 Group Buy',
    logo: 'Tool 72',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 73 Group Buy',
    logo: 'Tool 73',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 74 Group Buy',
    logo: 'Tool 74',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 75 Group Buy',
    logo: 'Tool 75',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 76 Group Buy',
    logo: 'Tool 76',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 77 Group Buy',
    logo: 'Tool 77',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 78 Group Buy',
    logo: 'Tool 78',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 79 Group Buy',
    logo: 'Tool 79',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 80 Group Buy',
    logo: 'Tool 80',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 81 Group Buy',
    logo: 'Tool 81',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 82 Group Buy',
    logo: 'Tool 82',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 83 Group Buy',
    logo: 'Tool 83',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 84 Group Buy',
    logo: 'Tool 84',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 85 Group Buy',
    logo: 'Tool 85',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 86 Group Buy',
    logo: 'Tool 86',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 87 Group Buy',
    logo: 'Tool 87',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 88 Group Buy',
    logo: 'Tool 88',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 89 Group Buy',
    logo: 'Tool 89',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 90 Group Buy',
    logo: 'Tool 90',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 91 Group Buy',
    logo: 'Tool 91',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 92 Group Buy',
    logo: 'Tool 92',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 93 Group Buy',
    logo: 'Tool 93',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 94 Group Buy',
    logo: 'Tool 94',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 95 Group Buy',
    logo: 'Tool 95',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 96 Group Buy',
    logo: 'Tool 96',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 97 Group Buy',
    logo: 'Tool 97',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 98 Group Buy',
    logo: 'Tool 98',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 99 Group Buy',
    logo: 'Tool 99',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 100 Group Buy',
    logo: 'Tool 100',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 101 Group Buy',
    logo: 'Tool 101',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 102 Group Buy',
    logo: 'Tool 102',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 103 Group Buy',
    logo: 'Tool 103',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 104 Group Buy',
    logo: 'Tool 104',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 105 Group Buy',
    logo: 'Tool 105',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 106 Group Buy',
    logo: 'Tool 106',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 107 Group Buy',
    logo: 'Tool 107',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 108 Group Buy',
    logo: 'Tool 108',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 109 Group Buy',
    logo: 'Tool 109',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 110 Group Buy',
    logo: 'Tool 110',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 111 Group Buy',
    logo: 'Tool 111',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 112 Group Buy',
    logo: 'Tool 112',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 113 Group Buy',
    logo: 'Tool 113',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 114 Group Buy',
    logo: 'Tool 114',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 115 Group Buy',
    logo: 'Tool 115',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 116 Group Buy',
    logo: 'Tool 116',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 117 Group Buy',
    logo: 'Tool 117',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 118 Group Buy',
    logo: 'Tool 118',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 119 Group Buy',
    logo: 'Tool 119',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 120 Group Buy',
    logo: 'Tool 120',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 121 Group Buy',
    logo: 'Tool 121',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 122 Group Buy',
    logo: 'Tool 122',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 123 Group Buy',
    logo: 'Tool 123',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 124 Group Buy',
    logo: 'Tool 124',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 125 Group Buy',
    logo: 'Tool 125',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 126 Group Buy',
    logo: 'Tool 126',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 127 Group Buy',
    logo: 'Tool 127',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 128 Group Buy',
    logo: 'Tool 128',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 129 Group Buy',
    logo: 'Tool 129',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 130 Group Buy',
    logo: 'Tool 130',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 131 Group Buy',
    logo: 'Tool 131',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 132 Group Buy',
    logo: 'Tool 132',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 133 Group Buy',
    logo: 'Tool 133',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 134 Group Buy',
    logo: 'Tool 134',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 135 Group Buy',
    logo: 'Tool 135',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 136 Group Buy',
    logo: 'Tool 136',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 137 Group Buy',
    logo: 'Tool 137',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 138 Group Buy',
    logo: 'Tool 138',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 139 Group Buy',
    logo: 'Tool 139',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 140 Group Buy',
    logo: 'Tool 140',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 141 Group Buy',
    logo: 'Tool 141',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 142 Group Buy',
    logo: 'Tool 142',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 143 Group Buy',
    logo: 'Tool 143',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 144 Group Buy',
    logo: 'Tool 144',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 145 Group Buy',
    logo: 'Tool 145',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 146 Group Buy',
    logo: 'Tool 146',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 147 Group Buy',
    logo: 'Tool 147',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 148 Group Buy',
    logo: 'Tool 148',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 149 Group Buy',
    logo: 'Tool 149',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 150 Group Buy',
    logo: 'Tool 150',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 151 Group Buy',
    logo: 'Tool 151',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 152 Group Buy',
    logo: 'Tool 152',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 153 Group Buy',
    logo: 'Tool 153',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 154 Group Buy',
    logo: 'Tool 154',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 155 Group Buy',
    logo: 'Tool 155',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 156 Group Buy',
    logo: 'Tool 156',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 157 Group Buy',
    logo: 'Tool 157',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 158 Group Buy',
    logo: 'Tool 158',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 159 Group Buy',
    logo: 'Tool 159',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 160 Group Buy',
    logo: 'Tool 160',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 161 Group Buy',
    logo: 'Tool 161',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 162 Group Buy',
    logo: 'Tool 162',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 163 Group Buy',
    logo: 'Tool 163',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 164 Group Buy',
    logo: 'Tool 164',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 165 Group Buy',
    logo: 'Tool 165',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 166 Group Buy',
    logo: 'Tool 166',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 167 Group Buy',
    logo: 'Tool 167',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 168 Group Buy',
    logo: 'Tool 168',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 169 Group Buy',
    logo: 'Tool 169',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 170 Group Buy',
    logo: 'Tool 170',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 171 Group Buy',
    logo: 'Tool 171',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 172 Group Buy',
    logo: 'Tool 172',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 173 Group Buy',
    logo: 'Tool 173',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 174 Group Buy',
    logo: 'Tool 174',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 175 Group Buy',
    logo: 'Tool 175',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 176 Group Buy',
    logo: 'Tool 176',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 177 Group Buy',
    logo: 'Tool 177',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 178 Group Buy',
    logo: 'Tool 178',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 179 Group Buy',
    logo: 'Tool 179',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 180 Group Buy',
    logo: 'Tool 180',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 181 Group Buy',
    logo: 'Tool 181',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 182 Group Buy',
    logo: 'Tool 182',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 183 Group Buy',
    logo: 'Tool 183',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 184 Group Buy',
    logo: 'Tool 184',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 185 Group Buy',
    logo: 'Tool 185',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 186 Group Buy',
    logo: 'Tool 186',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 187 Group Buy',
    logo: 'Tool 187',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 188 Group Buy',
    logo: 'Tool 188',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 189 Group Buy',
    logo: 'Tool 189',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 190 Group Buy',
    logo: 'Tool 190',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 191 Group Buy',
    logo: 'Tool 191',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 192 Group Buy',
    logo: 'Tool 192',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 193 Group Buy',
    logo: 'Tool 193',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 194 Group Buy',
    logo: 'Tool 194',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 195 Group Buy',
    logo: 'Tool 195',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 196 Group Buy',
    logo: 'Tool 196',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 197 Group Buy',
    logo: 'Tool 197',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 198 Group Buy',
    logo: 'Tool 198',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 199 Group Buy',
    logo: 'Tool 199',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 200 Group Buy',
    logo: 'Tool 200',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 201 Group Buy',
    logo: 'Tool 201',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 202 Group Buy',
    logo: 'Tool 202',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 203 Group Buy',
    logo: 'Tool 203',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 204 Group Buy',
    logo: 'Tool 204',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 205 Group Buy',
    logo: 'Tool 205',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 206 Group Buy',
    logo: 'Tool 206',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 207 Group Buy',
    logo: 'Tool 207',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 208 Group Buy',
    logo: 'Tool 208',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 209 Group Buy',
    logo: 'Tool 209',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 210 Group Buy',
    logo: 'Tool 210',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 211 Group Buy',
    logo: 'Tool 211',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 212 Group Buy',
    logo: 'Tool 212',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 213 Group Buy',
    logo: 'Tool 213',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 214 Group Buy',
    logo: 'Tool 214',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 215 Group Buy',
    logo: 'Tool 215',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 216 Group Buy',
    logo: 'Tool 216',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 217 Group Buy',
    logo: 'Tool 217',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 218 Group Buy',
    logo: 'Tool 218',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 219 Group Buy',
    logo: 'Tool 219',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 220 Group Buy',
    logo: 'Tool 220',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 221 Group Buy',
    logo: 'Tool 221',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 222 Group Buy',
    logo: 'Tool 222',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 223 Group Buy',
    logo: 'Tool 223',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 224 Group Buy',
    logo: 'Tool 224',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 225 Group Buy',
    logo: 'Tool 225',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 226 Group Buy',
    logo: 'Tool 226',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 227 Group Buy',
    logo: 'Tool 227',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 228 Group Buy',
    logo: 'Tool 228',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 229 Group Buy',
    logo: 'Tool 229',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 230 Group Buy',
    logo: 'Tool 230',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 231 Group Buy',
    logo: 'Tool 231',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 232 Group Buy',
    logo: 'Tool 232',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 233 Group Buy',
    logo: 'Tool 233',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 234 Group Buy',
    logo: 'Tool 234',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 235 Group Buy',
    logo: 'Tool 235',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 236 Group Buy',
    logo: 'Tool 236',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 237 Group Buy',
    logo: 'Tool 237',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 238 Group Buy',
    logo: 'Tool 238',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 239 Group Buy',
    logo: 'Tool 239',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 240 Group Buy',
    logo: 'Tool 240',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 241 Group Buy',
    logo: 'Tool 241',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 242 Group Buy',
    logo: 'Tool 242',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 243 Group Buy',
    logo: 'Tool 243',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 244 Group Buy',
    logo: 'Tool 244',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 245 Group Buy',
    logo: 'Tool 245',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 246 Group Buy',
    logo: 'Tool 246',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 247 Group Buy',
    logo: 'Tool 247',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 248 Group Buy',
    logo: 'Tool 248',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 249 Group Buy',
    logo: 'Tool 249',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 250 Group Buy',
    logo: 'Tool 250',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 251 Group Buy',
    logo: 'Tool 251',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 252 Group Buy',
    logo: 'Tool 252',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 253 Group Buy',
    logo: 'Tool 253',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 254 Group Buy',
    logo: 'Tool 254',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 255 Group Buy',
    logo: 'Tool 255',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 256 Group Buy',
    logo: 'Tool 256',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 257 Group Buy',
    logo: 'Tool 257',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 258 Group Buy',
    logo: 'Tool 258',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 259 Group Buy',
    logo: 'Tool 259',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 260 Group Buy',
    logo: 'Tool 260',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 261 Group Buy',
    logo: 'Tool 261',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 262 Group Buy',
    logo: 'Tool 262',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 263 Group Buy',
    logo: 'Tool 263',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 264 Group Buy',
    logo: 'Tool 264',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 265 Group Buy',
    logo: 'Tool 265',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 266 Group Buy',
    logo: 'Tool 266',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 267 Group Buy',
    logo: 'Tool 267',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 268 Group Buy',
    logo: 'Tool 268',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 269 Group Buy',
    logo: 'Tool 269',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 270 Group Buy',
    logo: 'Tool 270',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 271 Group Buy',
    logo: 'Tool 271',
    logoColor: 'text-blue-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 272 Group Buy',
    logo: 'Tool 272',
    logoColor: 'text-green-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 273 Group Buy',
    logo: 'Tool 273',
    logoColor: 'text-purple-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 274 Group Buy',
    logo: 'Tool 274',
    logoColor: 'text-orange-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 275 Group Buy',
    logo: 'Tool 275',
    logoColor: 'text-red-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 276 Group Buy',
    logo: 'Tool 276',
    logoColor: 'text-pink-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 277 Group Buy',
    logo: 'Tool 277',
    logoColor: 'text-indigo-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 278 Group Buy',
    logo: 'Tool 278',
    logoColor: 'text-teal-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 279 Group Buy',
    logo: 'Tool 279',
    logoColor: 'text-yellow-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  },
  {
    name: 'Tool 280 Group Buy',
    logo: 'Tool 280',
    logoColor: 'text-gray-600',
    price: '$4.99',
    pricing: getDefaultPricing(4.99),
    icon: '🛠️'
  }
]

export default function ToolsPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 78 // Show 78 tools per page (624 tools in 8 pages)

  // Filter tools
  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  // Pagination
  const totalPages = Math.ceil(filteredTools.length / itemsPerPage)
  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  // Debug: Log the tools data
  console.log('Total tools:', toolsData.length)
  console.log('Filtered tools:', filteredTools.length)
  console.log('Paginated tools:', paginatedTools.length)
  console.log('Tools data:', toolsData)


  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Individual Best Tools
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our extensive collection of premium tools available for individual purchase. 
            Choose from 624+ professional tools to enhance your workflow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1) // Reset to first page when searching
            }}
            className="w-full px-4 py-3 border-2 border-zinc-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-zinc-900"
          />
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedTools.map((tool, index) => (
            <a
              key={tool.name}
              href="https://members.seotoolsgroupbuy.us/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-blue-400 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow block"
            >
              {/* Top Section - Logo and Name */}
              <div className="bg-white p-4 relative h-24 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <img 
                    src={`https://logo.clearbit.com/${getLogoUrl(tool.logo)}`}
                    alt={`${tool.name} logo`}
                    className="max-h-8 max-w-24 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <span className={`font-bold text-sm ${tool.logoColor} text-center`}>
                    {tool.name.replace(' Group Buy', '')}
                  </span>
                </div>
              </div>

              {/* Middle Section - Price */}
              <div className="bg-white px-4 py-3 flex items-center justify-center">
                <div className="relative w-full">
                  <select className="w-full bg-white border-2 border-blue-400 rounded px-3 py-2 text-center font-medium text-zinc-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {tool.pricing ? (
                      <>
                        <option value="1">${tool.pricing['1']} / 1 Month</option>
                        <option value="3">${tool.pricing['3']} / 3 Months</option>
                        <option value="6">${tool.pricing['6']} / 6 Months</option>
                        <option value="12">${tool.pricing['12']} / 12 Months</option>
                      </>
                    ) : (
                      <option value={tool.price}>{tool.price}</option>
                    )}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Buy Now Button */}
              <div className="bg-white p-4">
                <div className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded flex items-center justify-center transition-colors duration-200">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span className="text-sm">Buy Now</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-zinc-300 text-zinc-700 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
