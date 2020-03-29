(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-dom', 'kotlin-css-js', 'kotlin-styled', 'kotlin-react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-css-js'), require('kotlin-styled'), require('kotlin-react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinConfExplorer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinConfExplorer'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'KotlinConfExplorer'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'KotlinConfExplorer'.");
    }if (typeof this['kotlin-css-js'] === 'undefined') {
      throw new Error("Error loading module 'KotlinConfExplorer'. Its dependency 'kotlin-css-js' was not found. Please, check whether 'kotlin-css-js' is loaded prior to 'KotlinConfExplorer'.");
    }if (typeof this['kotlin-styled'] === 'undefined') {
      throw new Error("Error loading module 'KotlinConfExplorer'. Its dependency 'kotlin-styled' was not found. Please, check whether 'kotlin-styled' is loaded prior to 'KotlinConfExplorer'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'KotlinConfExplorer'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'KotlinConfExplorer'.");
    }root.KotlinConfExplorer = factory(typeof KotlinConfExplorer === 'undefined' ? {} : KotlinConfExplorer, kotlin, this['kotlin-react-dom'], this['kotlin-css-js'], this['kotlin-styled'], this['kotlin-react']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_css_js, $module$kotlin_styled, $module$kotlin_react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Position = $module$kotlin_css_js.kotlinx.css.Position;
  var set_position = $module$kotlin_css_js.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css_js.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css_js.kotlinx.css.set_top_n8chyh$;
  var set_left = $module$kotlin_css_js.kotlinx.css.set_left_n8chyh$;
  var getKClass = Kotlin.getKClass;
  var set_right = $module$kotlin_css_js.kotlinx.css.set_right_n8chyh$;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_lqgejo$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_react.react.RComponent;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var H3_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var StyledDOMBuilder_init = $module$kotlin_styled.styled.StyledDOMBuilder;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function App() {
    RComponent_init(this);
  }
  function App$render$lambda$lambda($receiver) {
    $receiver.attrs.videos = VideosResponse_getInstance().unwatchedVideos;
    return Unit;
  }
  function App$render$lambda$lambda_0($receiver) {
    $receiver.attrs.videos = VideosResponse_getInstance().watchedVideos;
    return Unit;
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('KotlinConf Explorer');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_1 = $receiver_0.css;
    set_position($receiver_1, Position.absolute);
    set_top($receiver_1, get_px(10));
    set_left($receiver_1, get_px(10));
    var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Videos not watched');
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver_0.child_bzgiuu$(getKClass(VideoList), App$render$lambda$lambda);
    var $receiver_0_2 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_2.unaryPlus_pdl1vz$('Videos watched');
    $receiver_0.child_2usv9w$($receiver_0_2.create());
    $receiver_0.child_bzgiuu$(getKClass(VideoList), App$render$lambda$lambda_0);
    $receiver.child_2usv9w$($receiver_0.create());
    var $receiver_0_3 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_2 = $receiver_0_3.css;
    set_position($receiver_2, Position.absolute);
    set_top($receiver_2, get_px(10));
    set_right($receiver_2, get_px(100));
    var $receiver_0_4 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_4.unaryPlus_pdl1vz$('John Doe: Building and breaking things');
    $receiver_0_3.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(img$lambda(null, null, null));
    $receiver_0_5.attrs.src = 'https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder';
    $receiver_0_3.child_2usv9w$($receiver_0_5.create());
    $receiver.child_2usv9w$($receiver_0_3.create());
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_bzgiuu$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function Video(id, title, speaker, videoUrl) {
    this.id = id;
    this.title = title;
    this.speaker = speaker;
    this.videoUrl = videoUrl;
  }
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.id;
  };
  Video.prototype.component2 = function () {
    return this.title;
  };
  Video.prototype.component3 = function () {
    return this.speaker;
  };
  Video.prototype.component4 = function () {
    return this.videoUrl;
  };
  Video.prototype.copy_cgs6fs$ = function (id, title, speaker, videoUrl) {
    return new Video(id === void 0 ? this.id : id, title === void 0 ? this.title : title, speaker === void 0 ? this.speaker : speaker, videoUrl === void 0 ? this.videoUrl : videoUrl);
  };
  Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', speaker=' + Kotlin.toString(this.speaker)) + (', videoUrl=' + Kotlin.toString(this.videoUrl)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.videoUrl, other.videoUrl)))));
  };
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function VideoList() {
    RComponent_init(this);
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0.key = video.id.toString();
      $receiver_0.unaryPlus_pdl1vz$(video.speaker + ': ' + video.title);
      $receiver.child_2usv9w$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoList',
    interfaces: [RComponent]
  };
  function VideoListProps() {
  }
  VideoListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'VideoListProps',
    interfaces: []
  };
  function VideosResponse() {
    VideosResponse_instance = this;
    this.unwatchedVideos = listOf([new Video(1, 'Building and breaking things', 'John Doe', 'https://youtu.be/PsaFVLr8t4E'), new Video(2, 'The development process', 'Jane Smith', 'https://youtu.be/PsaFVLr8t4E'), new Video(3, 'The Web 7.0', 'Matt Miller', 'https://youtu.be/PsaFVLr8t4E'), new Video(4, 'The Web 8.0', 'George Tonks', 'https://youtu.be/PsaFVLr8t4E')]);
    this.watchedVideos = listOf_0(new Video(4, 'Mouseless development', 'Tom Jerry', 'https://youtu.be/PsaFVLr8t4E'));
  }
  VideosResponse.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'VideosResponse',
    interfaces: []
  };
  var VideosResponse_instance = null;
  function VideosResponse_getInstance() {
    if (VideosResponse_instance === null) {
      new VideosResponse();
    }return VideosResponse_instance;
  }
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  _.App = App;
  _.main = main;
  _.Video = Video;
  _.VideoList = VideoList;
  _.VideoListProps = VideoListProps;
  Object.defineProperty(_, 'VideosResponse', {
    get: VideosResponse_getInstance
  });
  main();
  Kotlin.defineModule('KotlinConfExplorer', _);
  return _;
}));

//# sourceMappingURL=KotlinConfExplorer.js.map
