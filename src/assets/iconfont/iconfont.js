;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M848.2028 624.638c61.7667 0 111.9928-50.2538 111.9928-111.9928 0-61.7667-50.2262-111.9949-111.9928-111.9949h-19.414016c-3.9373-11.1831-8.448-22.1194-13.4779-32.7014l13.6704-13.698c21.0811-21.0801 32.7025-49.2165 32.7025-79.1828 0-29.995-11.6214-58.1028-32.7025-79.1839-21.0801-21.1098-49.2165-32.7035-79.1839-32.7035-29.9704 0-58.1048 11.5937-79.1818 32.7035l-13.6704 13.6714c-10.6107-5.033-21.5214-9.5437-32.7311-13.481v-19.412992c0-61.7656-50.2292-111.9939-111.9949-111.9939-61.7636 0-111.9928 50.2282-111.9928 111.9939v19.412992c-11.2118 3.9373-22.1225 8.448-32.7322 13.481l-13.6714-13.6714c-21.077-21.1098-49.2124-32.7035-79.1828-32.7035-29.9663 0-58.0987 11.5937-79.1839 32.7035-21.076 21.0801-32.7014 49.1889-32.7014 79.1839 0 29.9674 11.6255 58.1028 32.7014 79.1828l13.6714 13.6704c-5.0289 10.6097-9.5406 21.5194-13.4779 32.7291h-19.414016c-61.7636 0-111.9928 50.2282-111.9928 111.9949 0 61.739 50.2292 111.9928 111.9928 111.9928h19.414016c3.9373 11.2118 8.449 22.1215 13.4779 32.7291l-13.6714 13.6714c-21.076 21.0811-32.7014 49.1909-32.7014 79.1849 0 29.996 11.6255 58.1028 32.7014 79.1828 21.0852 21.078 49.2175 32.7035 79.1839 32.7035 29.9715 0 58.1059-11.6255 79.1828-32.7035l13.6714-13.6704c10.6097 5.0309 21.5204 9.5119 32.7322 13.4789v19.416064c0 61.7359 50.2292 111.9928 111.9928 111.9928 61.7656 0 111.9949-50.2569 111.9949-111.9928v-19.416064c11.2097-3.967 22.1204-8.448 32.7311-13.5045l13.6704 13.695c21.077 21.078 49.2124 32.7035 79.1818 32.7035 29.9674 0 58.1038-11.6255 79.1839-32.7035 21.0811-21.0801 32.7025-49.1868 32.7025-79.1828 0-29.994-11.6214-58.1038-32.7025-79.1849l-13.6704-13.698c5.0299-10.6076 9.5406-21.5194 13.4779-32.7025H848.202752zM789.3873 710.6294c10.5277 10.5001 16.297 24.5555 16.297 39.594 0 15.0108-5.7692 29.0673-16.297 39.5909-21.0504 21.0278-58.1294 21.0278-79.1808 0l-43.1186-43.1452-18.4842 10.3629c-18.647 10.4172-38.826 18.7556-60.0177 24.7695l-20.3694 5.7723v61.057024c0 30.8675-25.1279 55.9933-55.9985 55.9933s-55.9985-25.1259-55.9985-55.9933v-61.057024l-20.3674-5.7723c-21.2183-6.0416-41.4259-14.3534-60.0156-24.7695l-18.4852-10.3363-43.1206 43.1176c-21.0534 21.0278-58.1294 21.0278-79.1828 0-10.5267-10.5236-16.2939-24.5801-16.2939-39.5909 0-15.0385 5.7672-29.0939 16.2939-39.594l43.1176-43.1165-10.3588-18.4852c-10.3916-18.5907-18.7054-38.7697-24.746-60.0412l-5.7733-20.3448h-61.053951999999995c-30.8695 0-55.9954-25.1279-55.9954-55.9964 0-30.8705 25.1249-55.9985 55.9954-55.9985h61.053951999999995l5.7733-20.3704c6.0406-21.2449 14.3544-41.4505 24.746-60.0156l10.3588-18.4832-43.1176-43.1186c-10.5267-10.5277-16.2939-24.5811-16.2939-39.5919 0-15.0395 5.7672-29.0939 16.2939-39.5919 21.0545-21.0278 58.1304-21.0278 79.1828 0l43.1206 43.1176 18.4852-10.3608c18.5897-10.3905 38.7983-18.731 60.0156-24.746l20.3674-5.7702v-61.056000000000004c0-30.8951 25.1279-55.9964 55.9985-55.9964s55.9985 25.1013 55.9985 55.9964v61.056000000000004l20.3694 5.7702c21.1917 6.016 41.3706 14.3278 60.0177 24.7716l18.4842 10.3352 43.1186-43.1176c21.0524-21.0278 58.1315-21.0278 79.1808 0 10.5277 10.498 16.297 24.5524 16.297 39.5919 0 15.0108-5.7692 29.0642-16.297 39.5919l-43.0909 43.1186 10.3076 18.4832c10.4479 18.6737 18.7832 38.8813 24.7706 60.0156l5.7733 20.3704h61.053951999999995c30.8695 0 55.9974 25.1279 55.9974 55.9985 0 30.8685-25.1279 55.9964-55.9974 55.9964h-61.053951999999995l-5.7733 20.3448c-5.9884 21.161-14.3227 41.342-24.7706 60.0412l-10.3076 18.4852L789.3873 710.6294zM512.2181 344.6528c-92.6372 0-167.9913 75.3551-167.9913 167.9923 0 92.6351 75.3541 167.9913 167.9913 167.9913s167.9913-75.3562 167.9913-167.9913C680.2094 420.0079 604.8553 344.6528 512.2181 344.6528zM512.2181 624.638c-61.7636 0-111.9928-50.2538-111.9928-111.9928 0-61.7667 50.2292-111.9949 111.9928-111.9949 61.7656 0 111.9949 50.2282 111.9949 111.9949C624.213 574.3841 573.9848 624.638 512.2181 624.638z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-pinglun" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M286.3134 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.14775 58.263985 56.165184 58.263985 31.017434 0 56.165184-26.079982 56.165184-58.263985C342.478584 403.021983 317.330834 376.940978 286.3134 376.940978zM510.976182 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.148773 58.263985 56.165184 58.263985s56.165184-26.079982 56.165184-58.263985C567.141366 403.021983 541.992593 376.940978 510.976182 376.940978zM735.638965 376.940978c-31.017434 0-56.166207 26.079982-56.166207 58.262962 0 32.184003 25.148773 58.263985 56.166207 58.263985s56.165184-26.079982 56.165184-58.263985C791.804149 403.021983 766.655376 376.940978 735.638965 376.940978zM847.968309 85.637426 173.982008 85.637426c-62.034868 0-112.330368 52.175313-112.330368 116.526947l0 436.95584c0 64.352657 51.421136 123.670647 114.88147 123.670647l171.183777 0c29.837562 31.785937 153.332201 159.63986 153.332201 159.63986 5.483898 5.703909 14.370289 5.703909 19.854187 0 0 0 90.418312-102.513792 149.328004-159.63986L845.41823 762.79086c63.461357 0 114.882494-59.319014 114.882494-123.670647L960.300724 202.164373C960.300724 137.812739 910.004201 85.637426 847.968309 85.637426zM904.13554 639.120212c0 32.1707-26.986631 65.929572-58.71731 65.929572L673.137469 705.049784c-20.869307 0-39.628556 21.459754-39.628556 21.459754L512.538771 851.977112l-120.942513-125.467573c0 0-23.037692-21.459754-42.782386-21.459754L176.533111 705.049784c-31.730679 0-58.716286-33.758871-58.716286-65.929572L117.816824 202.164373c0-32.18298 25.14775-58.265008 56.165184-58.265008l673.986301 0c31.017434 0 56.167231 26.082028 56.167231 58.265008L904.13554 639.120212z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M60.666 85.132h927.465v144.293h-927.465v-144.293z"  ></path>'+
      ''+
      '<path d="M60.666 425.355h927.465v144.293h-927.465v-144.293z"  ></path>'+
      ''+
      '<path d="M60.666 765.604h927.465v144.268h-927.465v-144.268z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shoucang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M752.165872 939.39509c-10.357905 0-20.766976-2.583848-30.15581-7.470135L514.397606 828.65494 304.962643 932.152129c-20.253276 10.809183-48.247864 8.91402-67.816548-5.51869-19.74674-14.204513-29.930683-39.446407-25.832342-64.055898l43.181475-224.130663L89.783863 484.698191c-18.092054-17.828041-24.520463-44.276413-16.841573-67.795059 7.452739-23.687492 27.481911-40.937364 52.176336-44.675502l228.604558-41.915645 102.468766-208.436216c11.150968-22.596647 33.511231-36.625152 58.262962-36.625152 24.63405 0 47.51006 14.432711 58.205657 36.801161l102.412484 208.144574 229.233891 40.709167c24.121374 3.619434 44.149523 20.754696 51.716872 44.676525 7.621585 23.397896 1.193175 49.851385-16.386202 67.156516L774.411525 638.446877l41.763173 223.728504c4.267187 24.842805-5.92085 50.083675-26.001187 64.687278C779.304975 934.854681 765.704213 939.39509 752.165872 939.39509L752.165872 939.39509zM514.454912 777.421069 742.494605 890.811582c7.452739 3.965312 15.019065 3.104711 20.934798-1.207501 6.090718-4.487198 9.159614-11.962449 7.910157-19.261693l-46.369074-248.28069 183.203532-172.669618c4.836145-4.7727 6.77224-12.594853 4.492314-19.609617-2.330068-7.299243-8.303106-12.419867-15.755846-13.510712l-252.392334-44.732807L531.75288 142.345985c-6.54609-13.625322-28.107151-13.568017-34.822087 0.061398L384.334365 371.425358l-251.763001 46.227858c-8.082072 1.207501-14.055111 6.383384-16.272615 13.511735-2.39249 7.184633-0.400113 15.006785 4.835122 20.239973l182.865841 170.713057-47.90915 248.741177c-1.137916 6.838755 1.87879 14.371312 7.740288 18.626219 6.203282 4.600785 14.223956 5.118578 20.652366 1.671059L514.454912 777.421069 514.454912 777.421069zM514.454912 777.421069"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gengduo1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M959.69595 889.615337 784.471137 889.615337 959.69595 714.390523Z"  ></path>'+
      ''+
      '<path d="M64.303027 665.014976l761.186316 0 0 83.769892-761.186316 0 0-83.769892Z"  ></path>'+
      ''+
      '<path d="M64.303027 488.144686l761.186316 0 0 83.754542-761.186316 0 0-83.754542Z"  ></path>'+
      ''+
      '<path d="M64.303027 311.264163l761.186316 0 0 83.770915-761.186316 0 0-83.770915Z"  ></path>'+
      ''+
      '<path d="M64.303027 134.384663l761.186316 0 0 83.762729-761.186316 0 0-83.762729Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-down" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M853.333333 831.010133c0 50.244267-40.7552 90.999467-91.022222 90.999467l-364.088889 0c-0.113778 0-0.227556-0.022756-0.364089-0.022756l-112.867556 0c-0.182044 0-0.364089 0.022756-0.546133 0.022756l-159.288889 0 0-500.622222 159.288889 0c2.844444 0 5.552356 0.546133 8.328533 0.8192 28.444444-81.92 68.539733-195.447467 84.878222-232.948622 25.622756-58.914133 47.968711-78.051556 88.814933-86.471111 40.618667-8.351289 168.891733 51.245511 129.160533 209.237333-4.096 16.292978-9.898667 39.480889-15.997156 63.852089L830.577778 375.876267c50.267022 0 68.266667 40.7552 68.266667 91.044978L853.333333 831.010133zM261.688889 466.898489 171.326578 466.898489 170.666667 466.875733l0 409.6 0 0 0 0.045511 91.022222 0 0-0.045511 22.755556 0 0 0 0-405.048889 0.864711-3.868444c0.2048-0.568889-0.2048 0.568889 0 0C280.644267 465.988267 266.877156 466.898489 261.688889 466.898489zM807.822222 421.387378 523.377778 421.387378l34.133333-136.556089c19.069156-83.945244-49.607111-134.439822-68.266667-136.533333-13.061689-1.456356-50.176 5.211022-68.266667 45.533867-11.832889 26.373689-64.079644 171.190044-91.5456 247.785244 0.091022 0.864711 0.500622 1.615644 0.500622 2.503111l0 432.355556 0 0 91.022222 0 0 0.045511 0 0 341.333333 0c25.122133 0 45.511111-20.388978 45.511111-45.533867l45.511111-364.088889C853.333333 441.7536 832.944356 421.387378 807.822222 421.387378z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gengduo1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M173.337837 310.297139l679.003572 0c24.283056 0 44.032866-21.859867 44.032866-48.733934s-19.750833-48.733934-44.032866-48.733934L173.337837 212.82927c-24.273846 0-44.023656 21.859867-44.023656 48.733934S149.063991 310.297139 173.337837 310.297139z"  ></path>'+
      ''+
      '<path d="M852.340385 463.266066 173.337837 463.266066c-24.273846 0-44.023656 21.859867-44.023656 48.733934 0 26.874067 19.750833 48.733934 44.023656 48.733934l679.003572 0c24.283056 0 44.032866-21.868053 44.032866-48.733934C896.374274 485.134119 876.616278 463.266066 852.340385 463.266066z"  ></path>'+
      ''+
      '<path d="M852.340385 713.702861 173.337837 713.702861c-24.273846 0-44.023656 21.868053-44.023656 48.733934 0 26.865881 19.750833 48.733934 44.023656 48.733934l679.003572 0c24.283056 0 44.032866-21.859867 44.032866-48.733934S876.616278 713.702861 852.340385 713.702861z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantou-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M702.882 958.388l64.032-63.397-380.993-383.606 384.196-380.377-63.49-63.925-448.221 443.779z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantou-copy1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M958.388 321.118l-63.397-64.032-383.606 380.993-380.377-384.196-63.925 63.49 443.779 448.221z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M496.089538 0l-64.188316 62.371091 462.228605 449.128398L431.900222 960.628886l64.187317 62.37209L1022.501463 511.499489 496.089538 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-gengduo-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M173.337837 310.297139l679.003572 0c24.283056 0 44.032866-21.859867 44.032866-48.733934s-19.750833-48.733934-44.032866-48.733934L173.337837 212.82927c-24.273846 0-44.023656 21.859867-44.023656 48.733934S149.063991 310.297139 173.337837 310.297139z"  ></path>'+
      ''+
      '<path d="M852.340385 463.266066 173.337837 463.266066c-24.273846 0-44.023656 21.859867-44.023656 48.733934 0 26.874067 19.750833 48.733934 44.023656 48.733934l679.003572 0c24.283056 0 44.032866-21.868053 44.032866-48.733934C896.374274 485.134119 876.616278 463.266066 852.340385 463.266066z"  ></path>'+
      ''+
      '<path d="M852.340385 713.702861 173.337837 713.702861c-24.273846 0-44.023656 21.868053-44.023656 48.733934 0 26.865881 19.750833 48.733934 44.023656 48.733934l679.003572 0c24.283056 0 44.032866-21.859867 44.032866-48.733934S876.616278 713.702861 852.340385 713.702861z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-lingdang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M850.643232 819.276339 170.445462 819.276339c-8.337899 0-15.801894-5.131881-18.730597-12.938684-2.928702-7.807826-0.427742-16.593933 5.853311-22.077831 39.170115-34.202986 69.125357-109.164259 74.241888-182.480055L231.810065 490.626203c0-94.758154 22.88215-168.666444 68.565609-219.676212 47.786353-53.357232 118.714775-80.410378 211.091696-80.410378 92.373851 0 163.445536 27.054169 211.234959 80.409354 45.685505 51.010791 68.856227 124.921127 68.856227 219.677235l0 111.153566c4.093225 75.321476 33.506115 148.606573 72.320119 182.504614 6.28003 5.482875 8.463766 14.246469 5.533017 22.054295C866.481965 814.145481 858.981131 819.276339 850.643232 819.276339zM214.441489 780.390703l592.45131 0c-30.78105-45.025473-57.287751-164.467819-55.241139-178.017416L751.65166 490.626203c0-172.573427-80.897472-260.075317-240.195547-260.075317-159.293983 0-240.130056 87.50189-240.130056 260.075317 0 0-0.042979 112.524796-0.066515 112.914676-2.346441 40.155559-11.44875 81.512479-26.290783 118.612445C236.308519 743.798297 225.996662 762.994498 214.441489 780.390703zM521.317715 910.747633c-44.12701 0-80.023568-35.896558-80.023568-80.021521 0-9.146311 1.538029-18.135032 4.573155-26.716478 3.683902-10.414187 15.113209-15.873526 25.532513-12.1886 10.41521 3.683902 15.873526 15.115256 12.189623 25.530466-1.515516 4.285606-2.284019 8.786107-2.284019 13.374612 0 22.061458 17.948791 40.011272 40.013319 40.011272 22.061458 0 40.011272-17.949814 40.011272-40.011272 0-4.629437-0.77055-9.135054-2.294252-13.395078-3.713578-10.404977 1.708921-21.851681 12.113899-25.568329 10.397814-3.712555 21.850657 1.705851 25.569352 12.112875 3.065825 8.589632 4.623297 17.623379 4.623297 26.850531C601.341283 874.851075 565.441655 910.747633 521.317715 910.747633zM552.104905 222.267223c-11.048637 0-20.465101-8.956999-20.465101-20.005636l0-31.727609c0-11.031241-8.922207-20.006659-19.953448-20.006659-11.030218 0-19.955494 8.975419-19.955494 20.006659l0 31.727609c0 11.048637-9.416464 20.005636-20.467147 20.005636-11.047614 0-20.465101-8.956999-20.465101-20.005636l0-31.727609c0-33.093722 27.795043-60.017932 60.887742-60.017932 33.094746 0 60.885695 26.924209 60.885695 60.017932l0 31.727609C572.572052 213.310224 563.155589 222.267223 552.104905 222.267223z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
