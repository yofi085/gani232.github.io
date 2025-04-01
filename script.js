var playerInstance = jwplayer("jwplayerDiv");

playerInstance.setup({
      file: "https://av-ch-cdn.mncnow.id/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd",
      image: "images/video.jpg",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "9ba3e153ef8956d6e2b0684fcf74f58f",
          "key": "dbc28cb5c6426080f984a5b6d436bb30"
        }
    },
      autostart: true
});

// Channel configuration object with DRM keys
const channels = {
    'RCTI': {
        url: 'https://d1abp075u76pbq.cloudfront.net/live/eds/RCTI-DD/sa_dash_vmx/RCTI-DD.mpd',
        referer: 'https://www.visionplus.id/',
        drm: {
            "clearkey": {
                "keyId": "9ba3e153ef8956d6e2b0684fcf74f58f",
                "key": "dbc28cb5c6426080f984a5b6d436bb30"
            }
        }
    },
    'Trans TV': {
        url: 'https://video.detik.com/transtv/smil:transtv.smil/index.m3u8'
    },
    'Vidio': {
        url: 'https://app.mt2dc.com/misc?id=204'
    },
    'Transvision': {
        url: 'https://video.detik.com/trans7/smil:trans7.smil/index.m3u8'
    },
    'CNN Indonesia': {
        url: 'https://live.cnnindonesia.com/livecnn/smil:cnntv.smil/chunklist_w733133162_b384000_sleng.m3u8'
    },
    'MNC TV': {
        url: 'https://cempedak-live-cdn.mncnow.id/live/eds/MNCTV-HD/sa_dash_vmx/MNCTV-HD.mpd',
        drm: {
            "clearkey": {
                "keyId": "828e0aba9825c3546a2831e4c0c36f7f",
                "key": "f85d3dcd38981368ab3da597e97ebdcc"
            }
        }
    },
    'GTV': {
        url: 'https://cempedak-live-cdn.mncnow.id/live/eds/GTV-HD/sa_dash_vmx/GTV-HD.mpd',
        drm: {
            "clearkey": {
                "keyId": "88f6c7cbd793374cb5f12d7e26dcd63b",
                "key": "e82daa7c7bfb03d99327463fdbd37336"
            }
        }
    },
    'Trans7': {
        url: 'https://video.detik.com/trans7/smil:trans7.smil/playlist.m3u8',
        type: 'hls',
        drm: {
            "clearkey": {
                "keyId": "ce17264b317db108f19cdc11aa1a9e66",
                "key": "a21188aee8fc5c56d016fcffcc6b2295"
            }
        },
        headers: {
            'Referer': 'https://www.trans7.co.id/',
            'Origin': 'https://www.trans7.co.id',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    },
    'SCTV': {
        url: 'https://app.mt2dc.com/misc?id=204'
    },
    'Indosiar': {
        url: 'https://app.mt2dc.com/misc?id=205'
    },
    'MOJI TV': {
        url: 'https://app.mt2dc.com/misc?id=206'
    },
    'MD TV': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/NetTV-HD/sa_dash_vmx/NetTV-HD.mpd'
    },
    'ANTV': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/ANTV/sa_dash_vmx/ANTV.mpd'
    },
    'DAAI TV': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/DAAITV/sa_dash_vmx/DAAITV.mpd'
    },
    'RTV': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/RTV/sa_dash_vmx/RTV.mpd'
    },
    'Kompas TV': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/KompasTV/sa_dash_vmx/KompasTV.mpd'
    },
    'Metro TV': {
        url: 'https://op-group1-swiftservehd-1.dens.tv/h/h12/01.m3u8'
    },
    'TVOne': {
        url: 'http://op-group1-swiftservehd-1.dens.tv/h/h40/01.m3u8'
    },
    'SindoNews': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/MNCnews-HDD/sa_dash_vmx/MNCnews-HDD.mpd'
    },
    'iNews': {
        url: 'https://d1abp075u76pbq.cloudfront.net/live/eds/iNewsTV-HDD/sa_dash_vmx/iNewsTV-HDD.mpd'
    },
    'IDX': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/IDX/sa_dash_vmx/IDX.mpd'
    },
    'TVRI': {
        url: 'https://ott-balancer.tvri.go.id/live/eds/Nasional/hls/Nasional-avc1_1500000=10003-mp4a_96000_eng=20001.m3u8'
    },
    'CNBC': {
        url: 'https://live.cnbcindonesia.com/livecnbc/smil:cnbctv.smil/chunklist_w1230509683_b384000_sleng.m3u8'
    },
    'BTV': {
        url: 'https://b1news.beritasatumedia.com/Beritasatu/B1News_960x540.m3u8'
    },
    'Garuda TV': {
        url: 'https://etv-cdn.kdb.co.id/GarudaTV-Stream/tracks-v1a1/mono.m3u8'
    },
    'VTV': {
        url: 'https://flv.intechmedia.net/live/ch107.m3u8'
    },
    'Nick Jr': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/NickJr-HDD/sa_dash_vmx/NickJr-HDD.mpd'
    },
    'Nickelodeon': {
        url: 'https://d1abp075u76pbq.cloudfront.net/live/eds/Nickelodeon/sa_dash_vmx/Nickelodeon.mpd'
    },
    'ZooMoo': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/Zoomoo/sa_dash_vmx/Zoomoo.mpd'
    },
    'Moonbug Kids': {
        url: 'https://moonbug-rokuus.amagi.tv/playlist.m3u8'
    },
    'Dora TV': {
        url: 'https://service-stitcher.clusters.pluto.tv/stitch/hls/channel/5d14fb6c84dd37df3b4290c5/master.m3u8'
    },
    'Dreamworks': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/Dreamwork-HD/sa_dash_vmx/Dreamwork-HD.mpd'
    },
    'Kids TV': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/Kids-HD/sa_dash_vmx/Kids-HD.mpd'
    },
    'Cbeebies': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/Cbeebies/sa_dash_vmx/Cbeebies.mpd'
    },
    'Fun Planet': {
        url: 'https://cdn01-telkomsel-01.akamaized.net/Content/DASH/Live/channel(c99739b1-0748-4a2a-b586-2501837adf20)/manifest.mpd'
    },
    'MyKids': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/My-Kids/sa_dash_vmx/My-Kids.mpd'
    },
    'Mentari TV': {
        url: 'https://app.mt2dc.com/misc?id=8237'
    },
    'ANIPLUS': {
        url: 'http://op-group1-swiftservehd-1.dens.tv/h/h201/02.m3u8'
    },
    'CinemachiKids': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/Cinemachi-Kids-HD/sa_dash_vmx/Cinemachi-Kids-HD.mpd'
    },
    'ANIMAX': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/Animax/sa_dash_vmx/Animax.mpd'
    },
    'Cartoon Network': {
        url: 'https://cdnjkt4.transvision.co.id:1000/live/master/4/4028c6856b8d2390016b9c3ee6c21d7c/manifest.mpd'
    },
    'HBO': {
        url: 'https://cdn01-telkomsel-01.akamaized.net/Content/DASH/Live/channel(92c7b96a-33fc-4899-a032-50ae0fbc9257)/manifest.mpd'
    },
    'HBO Hits': {
        url: 'https://cdn01-telkomsel-01.akamaized.net/Content/DASH/Live/channel(7e3ac8f2-3380-461a-976b-30bca8d939a0)/manifest.mpd'
    },
    'HBO Family': {
        url: 'https://cdn01-telkomsel-01.akamaized.net/Content/DASH/Live/channel(cec31cdd-d2ff-4c23-8a76-ad1c0ef025e2)/manifest.mpd'
    },
    'Cinemax': {
        url: 'https://cdnjkt4.transvision.co.id:1000/live/master/1/4028c6856c3db2cc016cdbfc4a1934bf/manifest.mpd'
    },
    'Galaxy Premium': {
        url: 'https://dsgtq5sngxkde.cloudfront.net/live/eds/GalaxyPremium-HD/sa_dash_vmx/GalaxyPremium-HD.mpd'
    },
    'BEIN SPORTS 1': {
        url: 'https://cempedak-cdn-fly.mncnow.id/live/eds/BEIN01/sa_dash_vmx/BEIN01.mpd'
    },
    'BEIN SPORTS 2': {
        url: 'https://cempedak-cdn-fly.mncnow.id/live/eds/BEIN02/sa_dash_vmx/BEIN02.mpd'
    },
    'BEIN SPORTS 3': {
        url: 'https://cempedak-cdn-fly.mncnow.id/live/eds/BEIN03/sa_dash_vmx/BEIN03.mpd'
    },
    'Champions TV 1': {
        url: 'https://app.mt2dc.com/misc?id=6685'
    },
    'Champions TV 2': {
        url: 'https://app.mt2dc.com/misc?id=6686'
    },
    'Champions TV 3': {
        url: 'https://app.mt2dc.com/misc?id=6786'
    },
    'Champions TV 5': {
        url: 'https://app.mt2dc.com/misc?id=9182'
    },
    'Champions TV 6': {
        url: 'https://app.mt2dc.com/misc?id=9183'
    },
    'EPL TV': {
        url: 'https://app.mt2dc.com/misc?id=9353'
    }
};

// Function to switch to a specific channel
function switchToChannel(channelName) {
    const channel = channels[channelName];
    if (!channel) {
        console.error('Channel not found:', channelName);
        return;
    }

    const player = jwplayer("jwplayerDiv");
    
    // Basic configuration
    const config = {
        file: channel.url,
        width: "100%",
        height: "100%",
        aspectratio: "16:9",
        autostart: true,
        primary: "html5",
        hlshtml: true,
        controls: true,
        stretching: "fill",
        skin: {
            name: "youtube"
        },
        sharing: false,
        displaytitle: true,
        logo: {
            hide: true
        },
        playlist: [{
            file: channel.url,
            title: channelName
        }]
    };

    // Add type configuration
    if (channel.type) {
        config.type = channel.type;
    } else if (channel.url.includes('.mpd')) {
        config.type = "dash";
    } else if (channel.url.includes('.m3u8')) {
        config.type = "hls";
    }

    // Add DRM if available
    if (channel.drm) {
        config.drm = channel.drm;
    }

    // Setup player
    player.setup(config);

    // Add custom headers if specified
    if (channel.headers || channel.referer) {
        const headers = channel.headers || {};
        if (channel.referer && !headers.Referer) {
            headers.Referer = channel.referer;
        }
        player.setConfig({
            httpHeaders: headers
        });
    }

    // Error handling
    player.on('error', function(e) {
        console.error('Player error:', e);
        setTimeout(() => {
            player.load();
            player.play();
        }, 2000);
    });

    // Ready handling
    player.on('ready', function() {
        // Set player to theater mode size
        const playerElement = document.getElementById('jwplayerDiv');
        if (playerElement) {
            playerElement.style.maxWidth = 'none';
            playerElement.style.margin = '0';
        }
    });
}

// Legacy functions for backward compatibility
function switchTo1() { switchToChannel('RCTI'); }
function switchTo2() { switchToChannel('Trans TV'); }
function switchTo3() { switchToChannel('Vidio'); }
function switchTo4() { switchToChannel('Transvision'); }
function switchTo5() { switchToChannel('CNN Indonesia'); }
function switchToExtra1() { switchToChannel('MNC TV'); }
function switchToExtra2() { switchToChannel('GTV'); }

function resizeShakaPlayer() {
    let shakaContainer = document.getElementById("jwplayerDiv");
    let videoElement = document.getElementById("shakaPlayer");
    
    function adjustSize() {
        let width = shakaContainer.clientWidth;
        let height = width * (9 / 16); 
        videoElement.style.width = width + "px";
        videoElement.style.height = height + "px";
    }
    
    adjustSize();
    window.addEventListener("resize", adjustSize);
}

function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}
