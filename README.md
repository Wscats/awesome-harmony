# 开发

本示例基于 OpenHarmony 下的 JavaScript UI 框架，进行项目目录解读，JS FA、常用和自定义组件、用户交互、JS 动画的实现，通过本示例可以基本了解和学习到 JavaScript UI 的开发模式。

本项目是基于 OpenHarmony 项目而不是 HarmonyOS 项目，请注意运行环境。
**请参考 [OpenHarmony 项目配置方法](https://gitee.com/isrc_ohos/ultimate-harmony-reference/blob/master/OpenHarmony%20JS%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B.md) 进行项目配置和运行。**

如果你不熟悉 OpenHarmony 的 JS 开发，**请参考该项目的 [开发讲解](https://gitee.com/isrc_ohos/ultimate-harmony-reference/blob/master/OpenHarmony%20JS%20Demo%E5%BC%80%E5%8F%91%E8%AE%B2%E8%A7%A3.md)。**

# 示例

1. 下载 [harmony-component](https://github.com/Wscats/harmony-component) 项目工程，将工程导入 DevEco Studio 进行编译构建及运行调试。
2. 进行编译构建，生成一个 HAP 应用安装包，生成 HAP 应用安装包。
3. 安装运行后，即可在设备上查看应用示例运行效果，以及进行相关调试。

<p align="left">
  <img height="500px" src="screenshot/3.gif" />
</p>

# 资料

网上资料有点散乱，先集中整理起来，后面慢慢学习消化。

> 收录来自 [ISRC_OHOS/UltimateHarmonyReference](https://gitee.com/isrc_ohos/ultimate-harmony-reference)

本项目的灵感来源于[UltimateAndroidReference](https://github.com/aritraroy/UltimateAndroidReference)。旨在提供一个精选的鸿蒙和 OpenHarmony 库、工具、开源项目、书籍、博客、教程的集合。减少大家漫无目的的搜索时间，帮助大家在学习鸿蒙的过程中少踩坑、少走弯路。

## 目录

- [库](#库)
  - [动画](#动画)
  - [图表绘制](#图表绘制)
  - [错误报告和跟踪](#错误报告和跟踪)
  - [图像加载](#图像加载)
  - [图像处理](#图像处理)
  - [日志](#日志)
  - [网络](#网络)
  - [存储](#存储)
  - [测试](#测试)
  - [UI 组件](#UI组件)
  - [实用工具](#实用工具)
  - [安全](#安全)
  - [文件数据](#文件数据)
  - [多媒体](#多媒体)
  - [其他](#其他)
- [开源 HAP](#开源HAP)
- [插件](#插件)
  - [免费](#免费)
  - [免费 (+ 专业版付费)](#免费 "+ 专业版付费")
- [鸿蒙 kotlin 相关](#鸿蒙kotlin相关)
- [DevEco 快捷键](#DevEco快捷键)
- [网站](#网站)
- [书籍](#书籍)
- [优秀文章](#优秀文章)
- [视频教程](#视频教程)
- [第三方组织](#第三方组织)

## 库

一些比较优秀的鸿蒙开源库，免去反复造轮子的麻烦，方便鸿蒙软件开发。

### 动画

- [ProgressWheel_ohos](https://gitee.com/isrc_ohos/progress-wheel_ohos) - 基于开源项目 ProgressWheel 的鸿蒙化移植开发，可以实现自定义环形进度条的功能，支持环形进度条的旋转、进度增加、文本设置。此组件配套有详细的介绍和讲解（[51CTO](https://harmonyos.51cto.com/posts/3250)、[知乎](https://zhuanlan.zhihu.com/p/349398534)、[CSDN](https://blog.csdn.net/VincenZsw/article/details/113652505)）
- [ContinuousScrollableImageView_ohos](https://gitee.com/isrc_ohos/continuous-scrollable-image-view_ohos) - 基于开源项目 ContinuousScrollableImageView 的鸿蒙化移植开发，可以显示具有连续滚动效果的图像，支持设置图像源、缩放类型、持续时间和方向
- [AZExplosion_ohos](待开源) - 基于开源项目 AZExplosion_ohos 的鸿蒙化移植开发，模仿 ExplosionField 的粒子爆炸效果
- [AVLoadingIndicatorView_ohos](https://gitee.com/isrc_ohos/avloading-indicator-view_ohos) - 基于开源项目 AVLoadingIndicatorView 进行鸿蒙化的移植和开发，支持加载动画的开关和隐藏，支持多种加载动画效果。此组件配套有详细的介绍和讲解（[51CTO](https://harmonyos.51cto.com/posts/2928)、[知乎](https://zhuanlan.zhihu.com/p/346029792)、[CSDN](https://blog.csdn.net/VincenZsw/article/details/112980936)）
- [LoadingView](https://github.com/isoftstone-dev/LoadingView_HarmonyOS) - 一个可以显示加载动画的三方组件，目前支持 4 种风格显示。
- [confetti](https://gitee.com/openharmony-tpc/confetti) - 一个高性能，易于配置的粒子系统库，可以通过空间对任何对象集进行动画处理。您可以指定
  起始条件和物理条件（例如 X 和 Y 加速度，边界等），然后由纸屑库负责其余的工作。
- [fresco](https://gitee.com/openharmony-tpc/fresco) - Fresco 是一个功能强大的系统，用于在 OpenHarmony 应用程序中显示图像。
- [ContinuousScrollableImageView](https://gitee.com/openharmony-tpc/ContinuousScrollableImageView) - 简单的 openharmonyOS 视图可有效显示具有连续滚动效果的图像。 您可以设置图像源，scaleType，持续时间和方向。 用法示例可在示例项目中找到。
- [DraggableView](https://gitee.com/openharmony-tpc/DraggableView) - 具有旋转和倾斜/缩放效果的可拖动图像。
- [ohos-animated-menu-items](https://gitee.com/openharmony-tpc/ohos-animated-menu-items) - xml 矢量图的加载，通过 openharmony 的方式使用自定义 Component 加 AnimatorValue 方式替代原有的 xml 动画效果，效果而言是与原库完全一致的。同时增加原有自带的点击效果，并且可以通过 xml 传参或 api 调取方式设置开关与颜色。
- [ohos-Spinkit](https://gitee.com/openharmony-tpc/ohos-Spinkit) - 一个加载动画库。
- [RippleEffect](https://gitee.com/openharmony-tpc/RippleEffect) - 一种水波纹效果。
- [HorizontalPicker](https://gitee.com/openharmony-tpc/HorizontalPicker) - 一个横向滑动选择器。
- [ohos-ExpandIcon](https://gitee.com/openharmony-tpc/ohos-ExpandIcon) - 一个动态的指示箭头。
- [Leonids](https://gitee.com/openharmony-tpc/Leonids) - Leonids 是可与标准 openharmony UI 一起使用的粒子系统库。
- [ohosViewAnimations](https://gitee.com/openharmony-tpc/ohosViewAnimations) - 文字放大视觉效果。
- [Transitions-Everywhere](https://gitee.com/openharmony-tpc/Transitions-Everywhere) - 用于在组件之间应用过渡。 它支持许多转换。 过渡定义了开始场景到结束场景之间的运动。 过渡示例包括淡入淡出，旋转，缩放等 。
- [lottie-ohos](https://gitee.com/openharmony-tpc/lottie-ohos) - 一个移动库，用于解析作为 json 导出的 Adobe After Effects 动画，并在移动设备上本地呈现它们。

### 图表绘制

- [MPChart_ohos](https://gitee.com/isrc_ohos/mp-chart_ohos) - 基于开源项目 MPAndroidChart 进行鸿蒙化的移植和开发，支持多种数据图的绘制
- [HistogramComponent](https://github.com/isoftstone-dev/BarGraphView_HarmonyOS) - 可以更快速实现一个简单的柱状图功能，对外提供数据源，修改柱状图颜色和间距的接口。

### 错误报告与跟踪

- [WatchDog_ohos](https://gitee.com/isrc_ohos/anr-watch-dog-ohos) - 基于开源项目 WatchDog 进行鸿蒙化的移植和开发，可检测到鸿蒙系统的 ANR 错误并引发有意义的异常

### 图像加载

- [uCrop_ohos](https://gitee.com/isrc_ohos/u-crop_ohos) - 基于开源项目 uCrop 进行鸿蒙化的移植和开发，作为裁剪组件，使用鸿蒙的 DataAbility 实现了对鸿蒙系统相册的读写。
- [GifImage](https://github.com/isoftstone-dev/gif_HarmonyOS) - 一个可以显示加载动态图片（gif 格式）的三方组件。

### 图像处理

- [Crop_ohos](https://gitee.com/isrc_ohos/crop_ohos) - 基于开源项目 Android-crop 进行鸿蒙化的移植和开发，该组件提供了一个自定义的裁剪框——可以在被裁减的图片范围内移动或缩放。
- [uCrop_ohos](https://gitee.com/isrc_ohos/u-crop_ohos) - 基于开源项目 uCrop 进行鸿蒙化的移植和开发，作为比较火的裁剪组件，功能强大。
- [ImageCropper_ohos](https://gitee.com/isrc_ohos/image-cropper_ohos) - 基于开源项目 AndroidImageCropper 进行鸿蒙化的移植和开发，裁剪组件。此组件配套有详细的介绍和讲解（[51CTO](https://harmonyos.51cto.com/posts/3254)、[知乎](https://zhuanlan.zhihu.com/p/347985294)、[CSDN](https://blog.csdn.net/VincenZsw/article/details/113392390)）
- [compress](https://github.com/isoftstone-dev/Compressor_Harmony) - 一个轻量级图像压缩库,允许将大照片压缩成小尺寸的照片，图像质量损失非常小。
- [RoundedImage](https://github.com/isoftstone-dev/RoundedImage_HarmonyOS) - 可以将图片显示成圆形，椭圆形，圆角矩形，目前仅支持上述三种样式显示。
- [Gilde_HarmonyOS](https://github.com/isoftstone-dev/Gilde_HarmonyOS.git) - 一款非常优秀的图片处理工具，支持多种格式图片加载,采用磁盘缓存、内存缓存方式实现预加载，指定缓存大小实现节省内存避免 OOM，操作方便简单易用。
- [自定义圆形图片](https://harmonyos.51cto.com/posts/2423) - 将图片设置为圆形显示的组件。
- [glide](https://gitee.com/openharmony-tpc/glide) - Glide 是一个针对 openharmony 的快速高效的图像加载库，专注于平滑滚动。Glide 提供了易于使用的 API，高性能和可扩展的资源解码管道以及自动资源池。Glide hmos testapplication +移植的代码项目 Glide 支持获取，解码和显示视频静止图像，图像和动画 GIF。Glide 包含一个灵活的 api，使开发人员可以插入几乎所有网络堆栈。默认情况下，Glide 使用基于自定义 HttpUrlConnection 的堆栈，但还包括实用程序库，这些实用程序库可插入 Google 的 Volley 项目或 Square 的 OkHttp 库。Glide 的主要重点是使任何种类的图像列表尽可能平滑和快速地滚动，但是 Glide 在几乎所有需要获取，调整大小和显示远程图像的情况下也很有效。

### 日志

- [Timber_ohos](https://gitee.com/isrc_ohos/timber_ohos) - 基于开源项目 Timber 进行鸿蒙化的移植和开发，增强鸿蒙输出日志的能力。
- [Hugo](https://github.com/JakeWharton/hugo) - 可以为 Annotation-triggered 方法注入调用 log，以供调试。
- [Logger](https://github.com/isoftstone-dev/Logger_Harmony) - log 日志打印组件，输出的日志在开发工具的 Hilog 控制台中, 结构比较清晰可分辨。

### 网络

- [VideoCache_ohos](https://gitee.com/isrc_ohos/video-cache_ohos) - 基于开源项目 AndroidVideoCache 进行鸿蒙化的移植和开发，支持自动缓存视频并在断网状态下播放视频。此组件配套有详细的介绍和讲解（[51CTO](https://harmonyos.51cto.com/posts/3463)、[知乎](https://zhuanlan.zhihu.com/p/358484308)）
- [AsyncHttpHarmony](https://github.com/isoftstone-dev/Http-Async-HarmonyOS) - 更加高效实现网络请求及数据处理。
- [fresco](https://gitee.com/openharmony-tpc/fresco) - Fresco 是一个功能强大的系统，用于在 OpenHarmony 应用程序中显示图像。
- [network-connection-class](https://gitee.com/openharmony-tpc/network-connection-class) - 测量移动端网络质量的组件。
- [okhttp-OkGo](https://gitee.com/openharmony-tpc/okhttp-OkGo) - 一个基于 okhttp 的标准 RESTful 风格的网络框架。
- [ThinDownloadManager](https://gitee.com/openharmony-tpc/ThinDownloadManager) - 主要用于下载文件的网络库 。
- [Fast-ohos-Networking](https://gitee.com/openharmony-tpc/Fast-ohos-Networking) - 一个功能强大的网络库，用于在 OkHttp Networking Layer 之上进行 Android 应用中的任何类型的网络连接。它负责处理连接过程中的所有操作，所以你只需要发送请求并接收响应。
- [okdownload](https://gitee.com/openharmony-tpc/okdownload) - 可靠，灵活，快速而强大的下载引擎。
- [ohos-async-http](https://gitee.com/openharmony-tpc/ohos-async-http) - 一个网络请求框架。
- [ohosAsync](https://gitee.com/openharmony-tpc/ohosAsync) - 一个低级网络协议库。
- [ion](https://gitee.com/openharmony-tpc/ion) - 加载并多种方式裁剪显示图片文件、加载 json 字符串、加载显示本地 media 和 rawfile 资源图片文件、不支持为图片加载前、加载中和加载失败添加占位图、不支持图片加载动画效果。
- [ReactiveNetwork](https://gitee.com/openharmony-tpc/ReactiveNetwork) - 用于侦听 RxJava Observables 的网络连接状态和 Internet 连接。 它是用反应式编程方法编写的。
- [okhttputils](https://gitee.com/openharmony-tpc/okhttputils) - 一个改善的 okHttp 封装库。

### 存储

- [ActiveOhos_sqlite](https://github.com/isoftstone-dev/Active_HarmonyOS) - 简化了 sqlite 数据库的连接，并且对 HarmonyOS 原生的 API 进行封装加强，使 sqlite 数据库的读写更加方便。

### 测试

- [AssertJ](https://github.com/joel-costigliola/assertj-core) - AssertJ 是一个库，提供了易于使用的富类型断言
- [Cucumber](https://github.com/autonomousapps/Cappuccino) - 自动编写自己的 IdlingResource（作者声明）。同时可以自动关闭系统动画。
- [Hamcrest](https://github.com/hamcrest/JavaHamcrest) - Java（和原始）版本的 Hamcrest
- [JUnit4](https://github.com/junit-team/junit4) - 面向程序员的 Java 测试框架
- [Mockito](https://github.com/mockito/mockito) - 最流行的 mock 框架，用于单元测试。
- [Truth](https://github.com/google/truth) - Java 单元测试的断言/命题框架

### UI 组件

- [DanmakuFlameMaster_ohos](https://gitee.com/isrc_ohos/danmaku-flame-master_ohos) - 基于开源项目 DanmakuFlameMaster 进行鸿蒙化的移植和开发，B 站的弹幕库，支持显示、隐藏、显示、暂停、继续、发送、定时发送弹幕。此组件配套有详细的介绍和讲解（[51CTO](https://harmonyos.51cto.com/posts/3261)、[知乎](https://zhuanlan.zhihu.com/p/341064525)、[CSDN](https://blog.csdn.net/VincenZsw/article/details/111703361)）
- [SlidingMenu_ohos](https://gitee.com/isrc_ohos/sliding-menu_ohos) - 基于开源项目 SlidingMenu 进行鸿蒙化的移植和开发，支持滑动菜单展示/隐藏
- [SnackBar_ohos](https://gitee.com/isrc_ohos/SnackBar_ohos) - 基于开源项目 SnackBar 进行鸿蒙化的移植和开发，支持显示弹出式提醒，包括文字和点击效果
- [Banner_ohos](https://gitee.com/isrc_ohos/banner_ohos) - 基于开源项目 Banner 进行鸿蒙化的移植和开发，鸿蒙广告图片轮播控件。此组件配套有详细的介绍和讲解（[51CTO](https://harmonyos.51cto.com/posts/3341)、[知乎](https://zhuanlan.zhihu.com/p/354631658)、[CSDN](https://blog.csdn.net/VincenZsw/article/details/114398112)）
- [Alerter](https://github.com/Tapadoo/Alerter) -一个定制通知视图
- [Material Dialogs](https://github.com/afollestad/material-dialogs) - 一个漂亮、流畅、可定制的对话框 API
- [PrecentPositionLayout](https://github.com/isoftstone-dev/PersentPositionLayout_HarmonOS) - 一种以百分比方式定义的 PrecentPositionLayout 布局容器，通过它可以很方便的实现屏幕自适应。
- [xrecyclerview](https://gitee.com/openharmony-tpc/XRecyclerView) - 一个实现了下拉刷新，滚动到底部加载更多以及添加 header 功能的的 RecyclerView。使用方式和 RecyclerView 完全一致，不需要额外的 layout，不需要写特殊的 adater。
- [ohos-gif-drawable](https://gitee.com/openharmony-tpc/ohos-gif-drawable) - 一个对于动画 GIF 的“视图”和“可绘制”，实现了 Animatable 和 MediaPlayerControl 这两个接口。
- [TakePhoto](https://gitee.com/openharmony-tpc/TakePhoto) - 一个开源工具库，用于获取照片（拍摄照片）并在 Harmony 设备上压缩图像。
- [PhotoView](https://gitee.com/openharmony-tpc/PhotoView) - 一款扩展自 Android ImageView ,支持通过单点/多点触摸来进行图片缩放的智能控件,功能实用和强大。
- [ReactiveNetwork](https://gitee.com/openharmony-tpc/ReactiveNetwork) - 是一个 OHOS 库，用于监听网络连接状态以及与 RxJava Observables 的 Internet 连接。
- [PullToZoomInListView](https://gitee.com/openharmony-tpc/PullToZoomInListView) - 一个自定义的列表视图，滑动 ListView 时使其 HeaderView 跟随滑动缩放的组件。
- [drawee_text_view](https://gitee.com/openharmony-tpc/drawee-text-view) - 一个简单的 ohos 组件，用于使用 Fresco 在 Text 组件周围显示图像。
- [yoga_layout](https://gitee.com/openharmony-tpc/yoga) - 一种实现 Flexbox 的跨平台布局引擎。
- [PatternLockView](https://gitee.com/openharmony-tpc/PatternLockView) - 一个自定义屏幕图案解锁控件，该库使您可以轻松，快速地在应用程序中实现模式锁定机制。它非常易于使用，并且提供了许多自定义选项，可以更改此视图的功能和外观以满足您的需求。
- [MZBannerView](https://gitee.com/openharmony-tpc/MZBannerView) - 基于仿魅族 BannerView 的图片轮播控件,支持多种模式切换：普通 ViewPager 使用，普通 Banner 使用，仿魅族 Banner 使用。
- [SlantedTextView](https://gitee.com/openharmony-tpc/SlantedTextView) - 一个倾斜的 TextView,适用于标签效果。
- [GoodView](https://gitee.com/openharmony-tpc/GoodView) - 鸿蒙点赞+1 效果，支持文本和图像
- [SlideAndDragListView](https://gitee.com/openharmony-tpc/SlideAndDragListView) - 一个自定义 ListContaner 控件，可以左右滑动菜单，上下拖拽改变 item 位置。
- [LayoutManagerGroup](https://gitee.com/openharmony-tpc/LayoutManagerGroup) - 一组自定义视图，负责测量和放置 RecyclerView 中的项目视图，并确定何时回收用户不再可见的项目视图的策略。 该库允许以对齐方式排列梯形图和特殊滑道等视图。
- [polygonsview](https://gitee.com/openharmony-tpc/polygonsview) - 模仿掌上英雄联盟能力分析效果。
- [SimpleCropView](https://gitee.com/openharmony-tpc/SimpleCropView) - 适用于鸿蒙的图像裁剪库,它简化了裁剪图像的代码，并提供了易于自定义的 UI。
- [LoadSir](https://gitee.com/openharmony-tpc/LoadSir) - 一个高效易用，低碳环保，扩展性良好的加载反馈页管理框架，在加载网络或其他数据时候，根据需求切换状态页面，
  可添加自定义状态页面，如加载中，加载失败，无数据，网络超时，如占位图，登录失效等常用页面。可配合网络加载框架，结合返回状态码，错误码，数据进行状态页自动切换，封装使用效果更佳。
- [CookieBar](https://gitee.com/openharmony-tpc/CookieBar) - CookieBar 是一个轻量级的库，用于在屏幕顶部或底部显示简短的消息。
- [CircleRefreshLayout](https://gitee.com/openharmony-tpc/CircleRefreshLayout) - 这是一个自定义下拉刷新控件，包含有趣的动画。
- [Alerter](https://gitee.com/openharmony-tpc/Alerter) - 支持原有的核心功能，动画没有原组件的体验好。
- [PatternLockView](https://gitee.com/openharmony-tpc/PatternLockView) - 一个自定义屏幕图案解锁控件，该库使您可以轻松，快速地在应用程序中实现模式锁定机制。它非常易于使用，并且提供了许多自定义选项，可以更改此视图的功能和外观以满足您的需求。它还支持 RxJava 2 视图绑定，因此，如果您喜欢响应式编程（就像我一样），则可以在用户绘制模式时获得更新流。
- [ValueCounter](https://gitee.com/openharmony-tpc/ValueCounter) - 实现组件计数器功能。
- [ImageCoverFlow](https://gitee.com/openharmony-tpc/ImageCoverFlow) - 轮播图片覆盖预览。
- [FloatingActionButton](https://gitee.com/openharmony-tpc/FloatingActionButton) - 具有许多功能的 HMOS 浮动动作按钮的另一种实现。
- [StateViews](https://gitee.com/openharmony-tpc/StateViews) - 创建并显示进度，数据或错误视图的简便方法。
- [FancyToast-ohos](https://gitee.com/openharmony-tpc/FancyToast-ohos) - 一个库，它将标准的 android 吐司带到一个新的层次，有各种样式选择。根据代码来做吐司。
- [WaveSideBar](https://gitee.com/openharmony-tpc/WaveSideBar) - 带有波浪效果的索引侧栏。
- [WaveView](https://gitee.com/openharmony-tpc/WaveView) - openHarmony 的波形图，可用作进度条。
- [ohos-Bootstrap](https://gitee.com/openharmony-tpc/ohos-Bootstrap) - ohos-Bootstrap 是一个 openharmony 库，它提供了根据 Twitter Bootstrap 规范。 这可以让您花费更多时间 而不是试图在整个应用程序中获得一致的主题，尤其是在您已经熟悉 Bootstrap 框架的情况下。
- [NavigationTabBar](https://gitee.com/openharmony-tpc/NavigationTabBar) - 导航选项卡栏，用于与色彩缤纷的互动实现开放和谐。
- [MaterialProgressBar](https://gitee.com/openharmony-tpc/MaterialProgressBar) - MaterialProgressBar 在 UI 上具有一致的外观。
- [flexbox-layout](https://gitee.com/openharmony-tpc/flexbox-layout) - FlexboxLayout 是一个库项目，将 CSS Flexible Box Layout Module 的类似功能引入了 openharmony。
- [floatingsearchview](https://gitee.com/openharmony-tpc/floatingsearchview) - 实现浮动搜索栏（也称为持久搜索）的搜索视图。
- [michaelbel_BottomSheet](https://gitee.com/openharmony-tpc/michaelbel_BottomSheet) - BottomSheet 带有材质设计概念的 ohos 对话库。
- [search-dialog](https://gitee.com/openharmony-tpc/search-dialog) - 带有内置搜索选项的令人敬畏且可自定义的搜索对话框。
- [Lichenwei-Dev_ImagePicker](https://gitee.com/openharmony-tpc/Lichenwei-Dev_ImagePicker) - ImagePicker 支持图片，视频单选，多选，多文件夹切换，大图片预览和自定义图片加载器等功能。
- [Swipecards](https://gitee.com/openharmony-tpc/Swipecards) - 自定义卡片，左右飞滑删除卡片，上下滑卡片回弹复位。
- [StatefulLayout](https://gitee.com/openharmony-tpc/StatefulLayout) - 显示最常见的状态模板，如加载，清空，错误等。要做的就是用 StatefulLayout 包装目标区域（视图） 。
- [material-intro-screen](https://gitee.com/openharmony-tpc/material-intro-screen) - Material intro screen 的设计灵感来自于 [Material Intro](https://gitee.com/openharmony-tpc/material-intro-screen/blob/master/material-intro-screen/src/main/java/agency/tango/materialintroscreen/slice/MaterialIntroSlice.java) ， 为了使简介屏幕易于所有人使用并尽可能方便的扩展，我倾注心血几乎完全重写所有功能。
- [NumberProgressBar](https://gitee.com/openharmony-tpc/NumberProgressBar) - NumberProgressBar 是各种类型的 progressBar 的组合。
- [BezierMaker](https://gitee.com/openharmony-tpc/BezierMaker) - 通过 de Casteljau 算法绘制贝塞尔曲线，并计算它的切线，实现 1-7 阶贝塞尔曲线的形成动画。
- [ShowcaseView](https://gitee.com/openharmony-tpc/ShowcaseView) - ShowcaseView 库旨在通过独特且吸引人的叠加层向用户突出显示和展示应用的特定部分。这个库非常适合指出用户的兴趣点，突出模糊但是有用的内容。
- [SlideSwitch](https://gitee.com/openharmony-tpc/SlideSwitch) - 一个开关，可以滑动它来打开或关闭。
- [TextDrawable](https://gitee.com/openharmony-tpc/TextDrawable) - 一个轻量级的库提供带有字母/文本的图像，例如 Gmail 应用程序。 它扩展了 ShapeElement 类，因此可以与现有/自定义/网络图像类一起使用。 还包括用于创建 shapeElement 的流畅接口和可自定义的 ColorGenerator。
- [SlidingLayout](https://gitee.com/openharmony-tpc/SlidingLayout) - SlidingLayout 是一种 Component 控件，可以帮助你实现类似微信网页浏览的下拉功能。
- [ArcProgressStackView](https://gitee.com/openharmony-tpc/ArcProgressStackView) - 在弧形模式下显示进度条，并提供信息和全面控制。
- [BGAQRCode-ohos](https://gitee.com/openharmony-tpc/BGAQRCode-ohos) - 定制各式各样的扫描框。
- [BottomBar](https://gitee.com/openharmony-tpc/BottomBar) - 底部导航栏功能。
- [CircleProgress](https://gitee.com/openharmony-tpc/CircleProgress) - 圆环形进度条。
- [TimetableView](https://gitee.com/openharmony-tpc/TimetableView) - 是一款开源的、完善、高效的课程表控件。
- [CalendarListview](https://gitee.com/openharmony-tpc/CalendarListview) - CalendarListview 提供了一种日历选择日期的简便方法。
- [glide-transformations](https://gitee.com/openharmony-tpc/glide-transformations) - 一个开放谐波转换库，可为 Glide 提供各种图像转换。
- [BGARefreshLayout-ohos](https://gitee.com/openharmony-tpc/BGARefreshLayout-ohos) - 实现下拉刷新效果，并增加上载。
- [CustomWaterView](https://gitee.com/openharmony-tpc/CustomWaterView) - 自定义仿支付宝蚂蚁森林水滴控件，实现水滴飘浮状态，点击水滴边降落边消失，重置水滴。
- [CountdownView](https://gitee.com/openharmony-tpc/CountdownView) - 一个具有倒计时功能的 View,满足大多数倒计时控件需求。
- [labelview ](https://gitee.com/openharmony-tpc/labelview) - 支持改变标签大小、方向、支持列表显示、支持在 ImageView,button,Text 上使用。
- [swipe](https://gitee.com/openharmony-tpc/swipe) - 实现页面滑动的监听，其中包含普通实现和 rxjava 实现.
- [UltraViewPager](https://gitee.com/openharmony-tpc/UltraViewPager) - UltraViewPager 是 PageSlider 的扩展，封装了多个功能，为多页面切换提供解决方案。
- [Gloading](https://gitee.com/openharmony-tpc/Gloading) - 深度解耦 Hos Hap 中全局加载中、加载失败及空数据视图，为组件化改造过程中的解耦长征助力，分离全局加载状态视图的实现和使用。
- [BadgeView](https://gitee.com/openharmony-tpc/BadgeView) - 一个消息提醒小红点，可以修改红点样式。
- [Sequent](https://gitee.com/openharmony-tpc/Sequent) - Sequent 是一个库，可以定期为多个视图连续启动动画。
- [Luban](https://gitee.com/openharmony-tpc/Luban) - 一个用于 OHOS 的图像压缩工具，其效率非常类似于 WeChat Moments 的效率。该模块有助于压缩 png，jpg，位图和 gif 类型的图像。
- [LikeSinaSportProgress](https://gitee.com/openharmony-tpc/LikeSinaSportProgress) - 两者点赞数量对比进度条。
- [ViewPagerIndicator](https://gitee.com/openharmony-tpc/ViewPagerIndicator) - 与以下版本的 PageSlider 兼容的分页指示器小部件 openharmony 以提高内容的可发现性。
- [FlycoPageIndicator](https://gitee.com/openharmony-tpc/FlycoPageIndicator) - 页面指示器库。
- [SCViewPager](https://gitee.com/openharmony-tpc/SCViewPager) - 用于 openHarmonyOS 的 Jazz 一个简单的 ViewPager 扩展，提供了基于滚动的动画。
- [Highlight](https://gitee.com/openharmony-tpc/Highlight) -一个用于 app 指向性功能高亮的库。
- [LoadingView](https://gitee.com/openharmony-tpc/LoadingView) - 简单的带有动画效果的加载控件。
- [CircleImageView](https://gitee.com/openharmony-tpc/CircleImageView) - 快速的圆形 ImageView 非常适合个人资料图像，它使用 PixelMapShader 创建自定义图像视图。
- [desertplaceholder](https://gitee.com/openharmony-tpc/desertplaceholder) - 沙漠风格的动画占位符 。
- [SwipeCardView](https://gitee.com/openharmony-tpc/SwipeCardView) - 自定义卡片，左右飞滑删除卡片，上下滑卡片回弹复位。
- [TextBannerView](https://gitee.com/openharmony-tpc/TextBannerView) - 现在的绝大数 APP 特别是类似淘宝京东等这些大型 APP 都有文字轮播界面，实现循环轮播多个广告词等功能；这种控件俗称“跑马灯”，而 TextBannerView 已经实现了可垂直跑、可水平跑的跑马灯了。
- [MaterialBadgeTextView](https://gitee.com/openharmony-tpc/MaterialBadgeTextView) - 一个为 Badge 提供了改进的 textview 的库。Badge 是带有插入数字的彩色圆圈，该圆圈显示在图标的右上角，通常在 IM 应用程序中显示新消息或新功能的作用。
- [AnimatedCircleLoadingView](https://gitee.com/openharmony-tpc/AnimatedCircleLoadingView) - 确定/不确定的加载视图动画。
- [WhorlView](https://gitee.com/openharmony-tpc/WhorlView) - 一个加载 View。
- [CircularFillableLoaders](https://gitee.com/openharmony-tpc/CircularFillableLoaders) - 个性化圆形进度显示。
- [SpinMenu](https://gitee.com/openharmony-tpc/SpinMenu) - 轮盘样式的 Component 菜单选择控件。
- [BubbleLayout](https://gitee.com/openharmony-tpc/BubbleLayout) - 气泡组件，具有自定义的笔触宽度和颜色，箭头大小，位置和方向。
- [AnimationEasingFunctions](https://gitee.com/openharmony-tpc/AnimationEasingFunctions) - 动画缓动功能。让动画更逼真！
- [BottomNavigationViewEx](https://gitee.com/openharmony-tpc/BottomNavigationViewEx) - 底部导航栏切换页面的实现。
- [DraggableView](https://gitee.com/openharmony-tpc/DraggableView) - 具有旋转和倾斜/缩放效果的可拖动图像。
- [ohos-slidr](https://gitee.com/openharmony-tpc/ohos-slidr) - 另一个滑块/ seekbar，但有所不同。
- [MyLittleCanvas](https://gitee.com/openharmony-tpc/MyLittleCanvas) - 创建自定义组件。
- [CProgressButton](https://gitee.com/openharmony-tpc/CProgressButton) - 像 iOS 的圆圈进度按钮。
- [RippleEffect](https://gitee.com/openharmony-tpc/RippleEffect) - 按钮点击波纹效果。
- [HorizontalPicker](https://gitee.com/openharmony-tpc/HorizontalPicker) - 一个横向滑动选择器。
- [TriangleLabelView](https://gitee.com/openharmony-tpc/TriangleLabelView) - 一个三角标签 View。
- [BottomNavigation](https://gitee.com/openharmony-tpc/BottomNavigation) - 一个底部导航栏控制器。
- [cardslib](https://gitee.com/openharmony-tpc/cardslib) - 一种在您的 homs 应用中使用 Official Google CardView 显示 UI 卡的简便方法。
- [discreteSeekBar](https://gitee.com/openharmony-tpc/discreteSeekBar) - 动画气泡指示当前滑动值。
- [materialish-progress](https://gitee.com/openharmony-tpc/materialish-progress) - 一个 material 风格的滚动式进度条(progress wheel)。
- [circular-progress-button](https://gitee.com/openharmony-tpc/circular-progress-button) - 实现环形进度按钮。
- [HeaderAndFooterRecyclerView](https://gitee.com/openharmony-tpc/HeaderAndFooterRecyclerView) - 一个 ListContainer 解决方案，它支持 addHeaderView，addFooterView 到 ListContainer。
- [ProgressView](https://gitee.com/openharmony-tpc/ProgressView) - 一个进度视图，目前实现了带数字进度的水平进度条以及圆形进度条，圆形进度条包括三种风格：普通环形进度，内部垂直填充进度以及内部环形填充进度。
- [MaterialEditText](https://gitee.com/openharmony-tpc/MaterialEditText) - Material Design 中对文本输入框的样式提供了标准,并且在 AppCompat v21 中提供了 Material Design 的空间外观支持。
- [SlideUp-ohos ](https://gitee.com/openharmony-tpc/SlideUp-ohos) - 一个小型库，可让您向任何视图添加甜美的幻灯片效果。使用 SlideUp 向上，向下，向左或向右滑动视图！
- [EazeGraph](https://gitee.com/openharmony-tpc/EazeGraph) - 一个用于创建精美图表库。它的主要目标是创建一个轻量级的库，该库易于使用并且高度可定制，具有“最新”外观。
- [ahbottomnavigation](https://gitee.com/openharmony-tpc/ahbottomnavigation) - 底部导航库。
- [ButtonProgressBar](https://gitee.com/openharmony-tpc/ButtonProgressBar) - ButtonProgressBar 一个下载按钮进度条。
- [DatePicker](https://gitee.com/openharmony-tpc/DatePicker) - 一个日期选择器。
- [PercentageChartView](https://gitee.com/openharmony-tpc/PercentageChartView) - 一个百分比图表，显示任何给定任务或信息的进度。
- [CountAnimationTextView](https://gitee.com/openharmony-tpc/CountAnimationTextView) - 一个很小的库使对 Text 的动画计数变得非常容易。
- [MultiWaveHeader](https://gitee.com/openharmony-tpc/MultiWaveHeader) - 一个可以高度定制每个波形的水波控件。
- [CircleView](https://gitee.com/openharmony-tpc/CircleView) - 包含标题和副标题的圆形视图。
- [ParallaxViewPager)](https://gitee.com/openharmony-tpc/ParallaxViewPager) - 视差背景效果。
- [MultiCardMenu](https://gitee.com/openharmony-tpc/MultiCardMenu) - 叠加菜单加载。
- [circular-music-progressbar](https://gitee.com/openharmony-tpc/circular-music-progressbar) - 此“环形进度条”是为需要精美音乐进度条的音乐播放器设计和制作的。
- [FlycoTabLayout](https://gitee.com/openharmony-tpc/FlycoTabLayout) - 多样化导航栏。
- [WheelView](https://gitee.com/openharmony-tpc/WheelView) - 一个自定义的滚轮类控件，样式简洁。
- [ohos-HoloCircularProgressBar](https://gitee.com/openharmony-tpc/ohos-HoloCircularProgressBar) - 实现环形进度条，可以改变进度条颜色等属性。
- [sweet-alert-dialog](https://gitee.com/openharmony-tpc/sweet-alert-dialog) - 清新文艺，快意灵动的甜心弹框。
- [WheelPicker](https://gitee.com/openharmony-tpc/WheelPicker) - 简单而梦幻般的滚轮视图。
- [AvatarImageView](https://gitee.com/openharmony-tpc/AvatarImageView) - 一种在 openharmony 平台上创建 AvatarImageView 的简单方法，该平台可以显示圆形文本或圆形图像，以及 SquareAvatarImageView 可以用于显示圆形图像。
- [michaelbel_BottomSheet](https://gitee.com/openharmony-tpc/michaelbel_BottomSheet) - BottomSheet 带有材质设计概念的 ohos 对话库。
- [CircularProgressView](https://gitee.com/openharmony-tpc/CircularProgressView) - 是一个圆形进度条 openharmony 视图，旨在模仿 ProgressBar 的 Material 版本。
- [EasySwipeMenuLayout](https://gitee.com/openharmony-tpc/EasySwipeMenuLayout) - 滑动菜单库不仅适用于 ListContainer，还适用于所有视图。
- [ExpandableLayout](https://gitee.com/openharmony-tpc/ExpandableLayout) - 一个用于 openharmony 的可扩展布局容器。
- [ohos-flowlayout](https://gitee.com/openharmony-tpc/ohos-flowlayout) - 如果当前行中没有空格，则将其内容包装到下一行。
- [ohos-viewbadger](https://gitee.com/openharmony-tpc/ohos-viewbadger) - 一个简单的文本标签视图，可以作为“徽章”应用到在运行时动态创建的任何给定组件，而不必在布局中迎合它。
- [pinned-section-listview](https://gitee.com/openharmony-tpc/pinned-section-listview) - pinnedsectionlist 是易于使用的 ListContainer，具有用于 openharmony 的固定部分。 pinnedsection 是一个标题视图，该视图粘贴到列表的顶部，直到该部分的至少一项可见为止 。
- [SlideshowToolbar](https://gitee.com/openharmony-tpc/SlideshowToolbar) - 一个使用 slideshowimageview 的幻灯片工具栏 。
- [MaterialDesignLibrary](https://gitee.com/openharmony-tpc/MaterialDesignLibrary) - 小部件的动画特效 demo 库。
- [ProgressPieView](https://gitee.com/openharmony-tpc/ProgressPieView) - 用于显示高度可定制的饼图中的进度。
- [Ratingbar](https://gitee.com/openharmony-tpc/Ratingbar) - 使用 RatingBar 来实现节目评分，例如反馈或其他所需的评分。
- [StickyListHeaders](https://gitee.com/openharmony-tpc/StickyListHeaders) - 为 ListContainer 提供高性能的替代品。
- [MetaballLoading](https://gitee.com/openharmony-tpc/MetaballLoading) - 二维元球加载 。
- [DiscreteSlider](https://gitee.com/openharmony-tpc/DiscreteSlider) - 提供带有“材质设计”规范中所示的值标签的滑块，以及一个 API。该库还为您提供范围滑块模式.
- [SwipeBack](https://gitee.com/openharmony-tpc/SwipeBack) - 可以使用手势完成活动。 您可以设置滑动方向，例如左，上，右和下。
- [material-dialogs](https://gitee.com/openharmony-tpc/material-dialogs) - 它具有几乎所有带有多个测试用例的 UI 组件，其中包括带有文本，图像，按钮，ListContainer 项目，调色板，自定义视图和进度栏的对话框。
- [GestureLock](https://gitee.com/openharmony-tpc/GestureLock) - 手势解锁密码。
- [ohos-SwitchView](https://gitee.com/openharmony-tpc/ohos-SwitchView) - 轻巧的开关视图风格，可实现和谐统一 。
- [bottomsheet](https://gitee.com/openharmony-tpc/bottomsheet) - 一个 openharmony 组件，从屏幕底部显示一个可忽略的视图。 BottomSheet 可以替代对话框和菜单，但可以保留任何视图，因此用例无穷无尽。 该存储库不仅包括 BottomSheet 组件本身，还包括一组在底部表单中显示的通用视图组件。 这些位于 commons 模块中。
- [slideview](https://gitee.com/openharmony-tpc/slideview) - 一个简单却很棒的滑动按钮，可实现和谐。
- [MultiType](https://gitee.com/openharmony-tpc/MultiType) - MultiType 提供了便捷的方法来轻松开发复杂的 ListContainer。 使用此库，我们可以插入其他类型的元素，而无需更改任何旧的 itemprovider 代码，并使它们更具可读性。
- [SectorProgressView](https://gitee.com/openharmony-tpc/SectorProgressView) - 一个圆形进度显示控件。
- [XEditText](https://gitee.com/openharmony-tpc/XEditText) - 带删除功能的 EditText；显示或者隐藏密码；可设置自动添加分隔符分割电话号码、银行卡号等；支持禁止 Emoji 表情符号输入。
- [ProtractorView](https://gitee.com/openharmony-tpc/ProtractorView) - 半圆形搜寻栏视图，用于从 0° 到 180 度之间选择一个角度。
- [williamchart](https://gitee.com/openharmony-tpc/williamchart) - Williamchart 是一个开放和谐图书馆，可以在和谐应用程序中快速实现引人入胜的图表。
- [SwitchButton](https://gitee.com/openharmony-tpc/SwitchButton) - 一个美观，轻巧，易于定制的开关小部件 。
- [progressbutton](https://gitee.com/openharmony-tpc/progressbutton) - progressbutton 是占位面积很小的自定义进度指示器。默认实现提供了一个 pin 进度按钮。
- [PageIndicatorView](https://gitee.com/openharmony-tpc/PageIndicatorView) - 是一个轻型库，用于指示 PageSlider 的选定页面具有不同的动画，并能够根据需要自定义它。
- [WhorlView](https://gitee.com/openharmony-tpc/WhorlView) - 一个加载的视图。
- [RulerView](https://gitee.com/openharmony-tpc/RulerView) - 一系列卷尺控件，包含：基本卷尺控件（体重尺，或其它）、金额卷尺控件、时间卷尺控件。
- [PRDownloader](https://gitee.com/openharmony-tpc/PRDownloader) - 下载器可用于下载任何类型的文件，如图像、视频、pdf、har 等。
- [ReadMoreTextView](https://gitee.com/openharmony-tpc/ReadMoreTextView) - 带有修剪文本的自定义 Text。
- [Fast-ohos-Networking ](https://gitee.com/openharmony-tpc/Fast-ohos-Networking) - 一个功能强大的网络库，用于在 OkHttp Networking Layer 之上进行应用中的任何类型的网络连接。它负责处理连接过程中的所有操作，所以你只需要发送请求并接收响应。
- [LovelyDialog](https://gitee.com/openharmony-tpc/LovelyDialog) - 一组简单的对话框包装类库，旨在帮助您轻松创建精美对话框。
- [SwipeActionAdapter](https://gitee.com/openharmony-tpc/SwipeActionAdapter) - 用于 ohos 的类似邮箱的滑动手势库。
- [RxBus](https://gitee.com/openharmony-tpc/RxBus) - 一个事件总线，旨在使您的应用程序进行有效的通信。RxBus 支持批注（@ produce / @ subscribe），它可以为您提供在其他线程（例如 MAIN_THREAD，NEW_THREAD，IO，COMPUTATION，TRAMPOLINE，EXECUTOR， 单和处理程序。 RxBus 还提供事件标签来定义事件。 方法的第一个（也是唯一的）参数和标记定义事件类型。
- [BGAQRCode-ohos](https://gitee.com/openharmony-tpc/BGAQRCode-ohos) - 一个可以定制各式各样的扫描框。

### 实用工具

- [Joda-time_ohos](https://gitee.com/isrc_ohos/joda-time_ohos) - 基于开源项目 SnackBar 进行鸿蒙化的移植和开发，鸿蒙日期和时间处理库。
- [Parceler_ohos](https://gitee.com/isrc_ohos/parceler_ohos) - 基于开源项目 Parceler 进行鸿蒙化的移植和开发，支持各种数据类型的快速序列化与反序列化，简单易用
- [SwipeCaptcha_ohos](https://gitee.com/isrc_ohos/swipe-captcha_ohos) - 基于开源项目 SwipeCaptcha 进行鸿蒙化的移植和开发，滑动验证码组件。此组件配套有详细的介绍和讲解（[51CTO](https://harmonyos.51cto.com/posts/3402)、[知乎](https://zhuanlan.zhihu.com/p/356619916)、[CSDN](https://blog.csdn.net/VincenZsw/article/details/114873257)）
- [ViewServer_ohos](https://gitee.com/isrc_ohos/view-server_ohos) - 基于开源项目 ViewServer 进行鸿蒙化的移植和开发，用于支持未来可能会推出的鸿蒙 Hierarchy Viewer
- [Zbar_ohos](https://gitee.com/isrc_ohos/ZBar_ohos) - 基于开源项目 Zbar 进行鸿蒙化的移植和开发，条形码阅读。
- [Gson](https://github.com/google/gson) - Java 序列化/反序列化库，用于将 Java 对象转换为 JSON 并返回。
- [Guava](https://github.com/google/guava) - Google Java 核心库。
- [PermissionsDispatcher](https://github.com/hotchemi/PermissionsDispatcher) - 简单的基于注释的 API 处理运行时权限 。
- [ProtoBuf](https://github.com/google/protobuf) - 协议缓冲区——Google 的数据交换格式 。
- [UpDownfile](https://github.com/isoftstone-dev/FileDownload_HarmonyOS) - 基于 Okhttp 为基础进行二次封装，是一款非常好用的文件上传下载框架。
- [RxJava](https://github.com/ReactiveX/RxJava) - RxJava – JVM 的反应性扩展–一个库，用于使用 Java VM 的可观察序列组成异步和基于事件的程序。
- [RxBus](https://gitee.com/openharmony-tpc/RxBus) - 一个事件总线，旨在使您的应用程序进行有效的通信。RxBus 支持批注（@ produce / @ subscribe），它可以为您提供在其他线程（例如 MAIN_THREAD，NEW_THREAD，IO，COMPUTATION，TRAMPOLINE，EXECUTOR， 单和处理程序。 RxBus 还提供事件标签来定义事件。 方法的第一个（也是唯一的）参数和标记定义事件类型。
- [BGAQRCode-ohos](https://gitee.com/openharmony-tpc/BGAQRCode-ohos) - 可定制各式各样的扫描框,可定制全屏扫描,可定制要识别的码的格式,可以控制闪光灯，方便夜间使用,zxing 二维码扫描功能,ZBar 扫描条码、二维码「已解决中文乱码问题」。
- [BGAQRCode-ohos](https://gitee.com/openharmony-tpc/BGAQRCode-ohos) - 可定制各式各样的扫描框, 可定制全屏扫描,可定制要识别的码的格式,可以控制闪光灯，方便夜间使用,可以二指缩放预览,ZXing 生成可自定义颜色、带 logo 的二维码,ZXing 扫描条码、二维码,ZBar 扫描条码、二维码「已解决中文乱码问题」
- [RushOrm](https://gitee.com/openharmony-tpc/RushOrm) - RushOrm 通过将 Java 类映射到 SQL 表来替代对 SQL 的需求。
- [xUtils3](https://gitee.com/openharmony-tpc/xUtils3) - xUtils 包含了 orm, http(s), image, view 注解, 特性强大, 方便扩展。
- [ohos-Universal-Image-Loader](https://gitee.com/openharmony-tpc/ohos-Universal-Image-Loader) - 现在图像加载库的伟大祖先 UIL 旨在为图像加载、缓存和显示提供一个强大、灵活和高度可定制的工具。它提供了大量的配置选项和良好的控制图像加载和缓存过程。
- [CameraView](https://gitee.com/openharmony-tpc/CameraView) - 这是一个模仿微信拍照的 ohos 开源控件点击拍照 10s 的视频大概 1.9M 左右长按录视频（视频长度可设置）录制完视频可以浏览并且重复播放前后摄像头的切换可以设置小视频保存路径。
- [ohos-ZBLibrary](https://gitee.com/openharmony-tpc/ohos-ZBLibrary) - Ohos_ZBLibrary 架构，提供一套开发标准（View, Data, Event）以及模板和工具类并规范代码。封装层级少，简单高效兼容性好。OKHttp 网络请求、Glide 图片加载、ZXing 二维码、自动缓存以及各种 Base、Demo、UI、Util 直接用。
- [RxBinding](https://gitee.com/openharmony-tpc/RxBinding) -用于 OpenHarmonyOS 的 UI 小部件的 RxJava 绑定 API。
- [Anadea_RxBus](https://gitee.com/openharmony-tpc/Anadea_RxBus) - 基于 RxJava 并针对 OpenHarmony 进行了优化的事件总线。
- [rx-preferences](https://gitee.com/openharmony-tpc/rx-preferences) - SharedPreference 对 OpenHarmony 有反应。
- [XXPermissions](https://gitee.com/openharmony-tpc/XXPermissions) - XxPermissions 权限请求框架 一键式权限请求框架。
- [ohosAutoLayout](https://gitee.com/openharmony-tpc/ohosAutoLayout) - 屏幕适配方案，直接填写设计图上的像素尺寸即可完成适配。
- [ReLinker](https://gitee.com/openharmony-tpc/ReLinker) - 用于 openharmony OS 的强大的本机库加载器,ReLinker 通过将标准 System.loadLibrary 调用替换为更可靠的实现来解决这些问题,在 cpp 文件的帮助下实现 JNI 级别的代码。
- [vlayout](https://gitee.com/openharmony-tpc/vlayout) - Project vlayout 是 ListContainer 的功能强大的 LayoutManager 扩展，它为 ListContainer 提供了一组布局。当网格，列表和其他布局位于同一 listContainer 中时，使其能够处理复杂的情况。通过为 ListContainer 提供自定义的 LayoutManager，VirtualLayout 可以在单个视图上优雅地布局具有不同样式的子视图。定制的 LayoutManager 管理一系列的 layoutHelpers，其中每个控件都为特定的位置范围项实现特定的布局逻辑。顺便说一下，还支持实现我们的自定义 layoutHelper 并将其提供给框架。
- [PersistentCookieJar](https://gitee.com/openharmony-tpc/PersistentCookieJar) - 基于 SharedPreferences 的 OkHttp3 的持久性 CookieJar 实现。该库通常用于存储从 http 网址获取的 cookie。再次，如果我们点击 url 并获取 cookie，那么在保存之前将检查 cookie 是否过期。如果它过期了，它将清除以前的并保存新的。
- [LoganSquare](https://gitee.com/openharmony-tpc/LoganSquare) - 适用于 ohos 的最快的 JSON 解析和序列化库。LoganSquare 基于 Jackson 的流 API，能够始终胜过 GSON 和 Jackson 的 Databind 库 400％或更多 1。通过依靠编译时注释处理来生成代码，您知道 JSON 的解析和序列化速度比任何其他可用方法都快。通过使用此库，您将能够利用 Jackson 的流 API 的功能，而不必编写 tedius（涉及 JsonParsers 或 JsonGenerators 的底层代码）的代码。相反，只需将模型对象标记为 a @JsonObject，将字段注释为@JsonFields，我们将为您完成繁重的工作。
- [ohos-ZBLibrary](https://gitee.com/openharmony-tpc/ohos-ZBLibrary) - Ohos_ZBLibrary 架构，提供一套开发标准（View, Data, Event）以及模板和工具类并规范代码。封装层级少，简单高效兼容性好。OKHttp 网络请求、Glide 图片加载、ZXing 二维码、自动缓存以及各种 Base、Demo、UI、Util 直接用。
- [AutoDispose](https://gitee.com/openharmony-tpc/AutoDispose) - AutoDispose 是一个 RxJava 工具库，用于通过处置/取消将 RxJava 流的执行自动绑定到提供的作用域。它有助于自动处理基于事件的 Observable 以避免内存泄漏。
- [RxLifeCycle](https://gitee.com/openharmony-tpc/RxLifeCycle) - 该库使我们能够根据第二个生命周期流自动完成序列。此功能在 openharmony 中很有用，因为不完整的订阅可能会导致内存泄漏。
- [DividerDrawable](https://gitee.com/openharmony-tpc/DividerDrawable) - 该库可以帮助您轻松地在现有视图上布局和绘制分隔线。为了获得更好的性能，请不要再为绘图分隔线创建新视图，而应使用 drawable。
- [fresco](https://gitee.com/openharmony-tpc/fresco) - Fresco 是一个功能强大的系统，用于在 OpenHarmony 应用程序中显示图像。壁画负责图像的加载和显示，因此您不必这样做。它将从网络，本地存储或本地资源加载图像，并显示一个占位符，直到图像到达为止。它具有两个级别的缓存；一个在内存中，另一个在内部存储器中。
- [ohosMP3Recorder](https://gitee.com/openharmony-tpc/ohosMP3Recorder) - 以捕捉到来自你的计算机音频 MP3，麦克风的声音，互联网流媒体，Winamp 的播放，Windows 媒体播放器音乐音频文件，可以录制你喜欢的章节。
- [webp-ohos](https://gitee.com/openharmony-tpc/webp-ohos) - webp 是 Chrome 的 webp 解码器的改编版，并添加了 JNI 包装器，可轻松在 Java 代码中使用它。
- [Rxohos](https://gitee.com/openharmony-tpc/Rxohos) - Rxohos：RxJava3 的 openharmony 特定绑定的反应性扩展。该模块向 RxJava 添加了最小的类，这些类使在 openharmony 应用程序中编写反应式组件变得容易且轻松。更具体地说，它提供了一个可在主线程或任何给定 EventRunner 上进行调度的 Scheduler。
- [butterknife](https://gitee.com/openharmony-tpc/butterknife) - openharmony 组件的字段和方法绑定，它使用注释处理为您生成样板代码。
- [logger](https://gitee.com/openharmony-tpc/logger) - 记录器：简单，漂亮，功能强大的记录器
- [stefanjauker_BadgeView](https://gitee.com/openharmony-tpc/stefanjauker_BadgeView) - BadgeView openharmony 项目，模仿 iOS Springboard'徽章'的扩展 TextView。它可以覆盖在任何其他项目上。
- [TinyPinyin](https://gitee.com/openharmony-tpc/TinyPinyin) - 快速、低内存占用的汉字转拼音库。
- [Compressor](https://gitee.com/openharmony-tpc/Compressor) - Compressor 是一个轻量级且功能强大的和谐图像压缩库。通过 Compressor，您可以将大照片压缩为较小尺寸的照片，而图像质量的损失则很小或可以忽略不计。不支持 WebP。
- [CompressHelper](https://gitee.com/openharmony-tpc/CompressHelper) - 图片压缩，压缩 Pixelmap，CompressImage 主要通过尺寸压缩和质量压缩，以达到清晰度最优。
- [xLog](https://gitee.com/openharmony-tpc/xLog) - 简单、美观、强大、可扩展的 openHormony 和 Java 日志库，可同时在多个通道打印日志，如 hilog、Console 和文件。如果你愿意，甚至可以打印到远程服务器（或其他任何地方）。
- [DragScaleCircleView](https://gitee.com/openharmony-tpc/DragScaleCircleView) - 一个可拖动与缩放的自定义圆形 View，它其实是一个 ImageView，自带了拖放圆形区域的功能，可以用于从一张图片截取一个圆形的视图。
- [MultiType](https://gitee.com/openharmony-tpc/MultiType) - MultiType：为 ListContainer 创建多个类型更容易，更灵活。以前，当我们需要开发复杂的 ListContainer 时，这是困难且麻烦的工作。一旦需要添加新的项目类型，就必须转到原始适配器文件并仔细修改一些旧代码，这些适配器类将变得更加复杂。MultiType 提供了便捷的方法来轻松开发复杂的 ListContainer。使用此库，我们可以插入其他类型的元素，而无需更改任何旧的 itemprovider 代码，并使它们更具可读性。
- [FlycoRoundView](https://gitee.com/openharmony-tpc/FlycoRoundView) - 库可帮助 openharmony 内置视图轻松方便地设置圆形矩形背景，并因此可以减少相关的形状资源。
- [BadgeView](https://gitee.com/openharmony-tpc/BadgeView) - BadgeView 是个消息提醒小红点，可以修改红点样式。
- [CustomActivityOnCrash](https://gitee.com/openharmony-tpc/CustomActivityOnCrash) - CustomActivityOnCrash：CustomActivityOnCrash 是 OHOS 库，允许应用崩溃时启动自定义活动，而不是显示讨厌的“不幸的是，X 已停止”对话框。
- [ticker](https://gitee.com/openharmony-tpc/ticker) - ticker 是一个简单的 openharmony 组件，用于显示滚动文本。此行情自动收录器可处理字符串之间的平滑动画以及调整字符串的大小。
- [ohos-validation-komensky](https://gitee.com/openharmony-tpc/ohos-validation-komensky) - ohos-validation-komensky：一个简单的库，用于使用注释来验证表单中的用户输入。
- [ormlite-ohos](https://gitee.com/openharmony-tpc/ormlite-ohos) - 该软件包提供了特定于 ohos 的功能。（ormlite-core-与 ormlite-jdbc 或 ormlite-ohos 一起提供 lite Java ORM 的核心 ORMLite 功能）。
- [TheMVP](https://gitee.com/openharmony-tpc/TheMVP) - 在 MVP 模式下，View 和 Model 是完全分离没有任何直接关联的(比如你在 View 层中完全不需要导 Model 的包，也不应该去关联它们)。使用 MVP 模式能够更方便的帮助 Ability(或 AbiltySlice)职责分离，减小类体积，使项目结构更加清晰。
- [RxScreenshotDetector](https://gitee.com/openharmony-tpc/RxScreenshotDetector) - 带有 DataAbilityHelper 和 Rx 的 openharmony 屏幕截图检测器。
- [seismic](https://gitee.com/openharmony-tpc/seismic) - openharmony 设备抖动检测。它会侦听并识别具有适当硬件的设备上的抖动。
- [SystemBarTint](https://gitee.com/openharmony-tpc/SystemBarTint) - 在 openharmony 系统 UI 上应用背景着色“色调”样式非常适合基于壁纸的活动，例如主屏幕启动器，但是提供的最小背景保护使其在其他类型的活动中不那么有用，除非您在布局中提供自己的背景。确定给定设备配置的系统 UI 的大小，位置和存在可能并非易事。该库提供了一种使用颜色值为系统栏创建背景“色调”的简单方法。
- [lock-screen](https://gitee.com/openharmony-tpc/lock-screen) - 简单漂亮的锁屏库可设置检查密码。使用锁屏库轻松保护您的应用程序，就像启动意图一样简单。
- [EventBus](https://gitee.com/openharmony-tpc/EventBus) - 是 openhormony 和 Java 的发布/订阅事件总线。
- [okhttputils](https://gitee.com/openharmony-tpc/okhttputils) - 对 okhttp 的封装类。
- [ohos-NoSql](https://gitee.com/openharmony-tpc/ohos-NoSql) - 轻巧，结构简单的 NoSQL 数据库，可实现 Openharmony。
- [Matisse](https://gitee.com/openharmony-tpc/Matisse) - Matisse 是为 Openharmony 设计的精心设计的本地图像和视频选择器。你可以 Ability 或 AbilitySlice 中使用它，选择包括 JPEG，PNG，GIF 的图像以及包括 MPEG，MP4 的视频，应用不同的主题，包括两个内置主题和自定义主题，不同的图像加载器，定义自定义过滤规则。
- [cropper](https://gitee.com/openharmony-tpc/cropper) - 裁剪器是一种图像裁剪工具。它提供了一种以 XML 方式和以编程方式设置图像的方法，并在图像顶部显示了可调整大小的裁剪窗口。然后，调用方法 getCroppedImage（）将返回由裁剪窗口标记的 PixelMap。
- [ImagePicker](https://gitee.com/openharmony-tpc/ImagePicker) - 自定义相册，完全仿微信 UI，实现了拍照、图片选择（单选/多选）、 裁剪 、旋转、等功能。
- [FileDownloader](https://gitee.com/openharmony-tpc/FileDownloader) - HarmonyOpenSource 多任务文件下载引擎。
- [Keyframes](https://gitee.com/openharmony-tpc/Keyframes) - 关键帧是（1）从 After Effects 文件中提取图像动画数据的 ExtendScript 脚本和（2）OpenHarmony 的相应渲染库的组合。关键帧可用于导出和渲染高质量，基于矢量的动画，这些动画具有复杂的形状和路径曲线，而且文件占用空间极小。
- [device-year-class](https://gitee.com/openharmony-tpc/device-year-class) - Device Year Class 是一个 Openharmony 库，它实现了一个简单的算法，该算法将设备的 RAM，CPU 内核和时钟速度映射到那些规格组合被认为是高端的年份。这使开发人员可以根据电话硬件的功能轻松修改应用程序的行为。
- [Toasty](https://gitee.com/openharmony-tpc/Toasty) - 主要将底层安卓接口调用的实现修改成鸿蒙接口的实现，将三方库鸿蒙化，供开发鸿蒙应用的开发者使用。
- [LitePal](https://gitee.com/openharmony-tpc/LitePal) - LitePal 是一个开源的 openharmony 库，它使开发人员可以非常轻松地使用 SQLite 数据库。您无需编写 SQL 语句即可完成大多数数据库操作，包括创建或升级表，crud 操作，聚合函数等。LitePal 的设置也非常简单，您可以在不到 5 个的时间内将其集成到项目中分钟。
- [preferencebinder](https://gitee.com/openharmony-tpc/preferencebinder) - 使用注释处理，此库使加载 SharedPreferences 值和侦听更改变得容易。

### 安全

- [PermissionsDispatcher](https://gitee.com/openharmony-tpc/PermissionsDispatcher) - PermissionsDispatcher 提供了一个简单的基于注释的 API 来处理运行时权限。该库减轻了编写一堆检查语句（无论是否已授予您权限）带来的负担，以保持您的代码干净安全。
- [Dexter](https://gitee.com/openharmony-tpc/Dexter) - 一个可简化运行时的权限请求过程。 允许用户在运行应用程序时授予或拒绝权限，而不是在安装应用程序时授予所有权限。

### 文件数据

- [hawk](https://gitee.com/openharmony-tpc/hawk) - Hawk，用于 OpenHarmonyOS 的安全，简单的键值存储。
- [ohos-NoSql](https://gitee.com/openharmony-tpc/ohos-NoSql) - 轻巧，结构简单的 NoSQL 数据库，可实现 Openharmony。
- [Parceler](https://gitee.com/openharmony-tpc/Parceler) - Parceler：简单捆绑数据注入框架。
- [LitePal](https://gitee.com/openharmony-tpc/LitePal) - LitePal 是一个开源的 openharmony 库，它使开发人员可以非常轻松地使用 SQLite 数据库。您无需编写 SQL 语句即可完成大多数数据库操作，包括创建或升级表，crud 操作，聚合函数等。LitePal 的设置也非常简单，您可以在不到 5 个的时间内将其集成到项目中分钟。
- [tray](https://gitee.com/openharmony-tpc/tray) - 托盘是此提到的*显式跨进程数据管理方法*。托盘还提供了高级 API，通过升级和迁移机制，它可以非常轻松地访问和维护您的数据。
- [ohos-database-sqlcipher](https://gitee.com/openharmony-tpc/ohos-database-sqlcipher) - ohos-database-sqlcipher 用于完全数据库加密。
- [ormlite-ohos](https://gitee.com/openharmony-tpc/ormlite-ohos) - 该软件包提供了特定于 ohos 的功能。ormlite-core-与 ormlite-jdbc 或 ormlite-ohos 一起提供 lite Java ORM 的核心 ORMLite 功能。
- [FileDownloader](https://gitee.com/openharmony-tpc/FileDownloader) - HarmonyOpenSource 多任务文件下载引擎。

### 多媒体

- [CameraView](https://gitee.com/openharmony-tpc/CameraView) - CameraView 这是一个模仿微信拍照的 ohos 开源控件

  点击拍照 10s 的视频大概 1.9M 左右长按录视频（视频长度可设置）录制完视频可以浏览并且重复播放前后摄像头的切换可以设置小视频保存路径。

- [FastBle](https://gitee.com/openharmony-tpc/FastBle) - Ohos Bluetooth Low Energy 蓝牙快速开发框架。鸿蒙，使用简单的方式进行搜索、连接、读写等一系列蓝牙操作，并实时地得到操作反馈。

- [ohosMP3Recorder](https://gitee.com/openharmony-tpc/ohosMP3Recorder) - 以捕捉到来自你的计算机音频 MP3，麦克风的声音，互联网流媒体，Winamp 的播放，Windows 媒体播放器音乐音频文件，可以录制你喜欢的章节。

- [webp-ohos](https://gitee.com/openharmony-tpc/webp-ohos) - webp 是 Chrome 的 webp 解码器的改编版，并添加了 JNI 包装器，可轻松在 Java 代码中使用它。

- [PloyFun](https://gitee.com/openharmony-tpc/PloyFun) - 此仓库是为了提升国内下载速度的镜像仓库。

- [libyuv](https://gitee.com/openharmony-tpc/libyuv) - libyuv 是 Google 的开源库，用于在 YUV 和 RGB 之间进行转换，旋转和缩放。它支持在 Windows，Linux，Mac 和其他平台，x86，x64，arm 架构以及 SIMD 指令加速（例如 SSE，AVX，NEON）上进行编译和执行。

- [Matisse](https://gitee.com/openharmony-tpc/Matisse) - Matisse 是为 Openharmony 设计的精心设计的本地图像和视频选择器。你可以 Ability 或 AbilitySlice 中使用它，选择包括 JPEG，PNG，GIF 的图像以及包括 MPEG，MP4 的视频，应用不同的主题，包括两个内置主题和自定义主题，不同的图像加载器，定义自定义过滤规则。

- [ImagePicker](https://gitee.com/openharmony-tpc/ImagePicker) - 自定义相册，完全仿微信 UI，实现了拍照、图片选择（单选/多选）、 裁剪 、旋转、等功能。

### 其他

- [agera](https://gitee.com/openharmony-tpc/agera) - 一组类和接口，可帮助编写功能性，异步和反应性应用程序。
- [preferencebinder](https://gitee.com/openharmony-tpc/preferencebinder) - 一个首选绑定库。

## 开源 HAP

鸿蒙社区中有一些（未来会变得很多）开源 HAP 可供开发者学习，这个列表可以帮助你找到真正值得你花时间并且可以帮助你学到东西的开源 HAP。

- [OpenHarmony Samples](https://gitee.com/openharmony/app_samples) - 为帮助开发者快速熟悉 HarmonyOS 和 OpenHarmony SDK 所提供的 API 和应用开发流程，提供了一系列的应用示例，即 Sample。

- [官方 CodeLabs](https://gitee.com/openharmony/codelabs) - 该 Codelabs 旨在向开发人员展示如何通过趣味场景来展示如何使用 HarmonyOS 能力的示例应用程序文档教程。

- [0 基础开发抖音 App](https://harmonyos.51cto.com/posts/2095)

- [2048 小游戏(腕表)](https://harmonyos.51cto.com/posts/1566)

## DevEco 插件

在 DevEco 中配置好合适的插件，可以有效地提升你的鸿蒙开发工作效率。这个列表提供了经过我们挑选的 DevEco 插件，希望会对你的开发工作产生帮助。

### 免费版

- [Buck](https://github.com/facebook/buck) - 快速构建系统，鼓励通过各种平台和语言创建小型可重用的模块
- [Carbon](https://github.com/dawnlabs/carbon) - 创建并共享源代码的精美图片
- [CodeGlance](https://plugins.jetbrains.com/plugin/7275-codeglance) - 将类似于 Sublime 中的代码的微型地图嵌入到编辑器窗格中。 使用您自定义的颜色对亮色和深色主题进行语法突出显示
- [Codota](https://www.codota.com/ide-plugin) - 通过直接在 IDE 中获取出色的代码示例来增强开发工作流程。 IntelliJ 的 Codota 插件可让您快速找到每个 API 类或方法的最佳代码示例
- [Dagger IntelliJ Plugin](https://github.com/square/dagger-intellij-plugin) - 用于 Dagger 的 IntelliJ IDEA 插件，可深入了解如何使用注入和提供程序
- [Detekt](https://github.com/arturbosch/detekt) - Kotlin 的静态代码分析
- [DTO Generator](https://plugins.jetbrains.com/plugin/7834-dto-generator) - 数据传输对象（DTO）生成器，可从给定的提要中生成 Java 类
- [Infer](https://github.com/facebook/infer) - 用于 Java，C，C ++和 Objective-C 的静态分析器
- [JSONSchema2POJO](http://www.jsonschema2pojo.org) - 简单快速地将 JSON 转换为 Java 对象的方法
- [Material Palette](https://www.materialpalette.com) - 快速轻松地生成 Material Design 调色板
- [Methods Count](http://www.methodscount.com) - 您的完美契合 APK 解决方案
- [Sonar](https://github.com/facebook/Sonar) -适用于移动开发人员的桌面调试平台
- [SonarLint](https://plugins.jetbrains.com/plugin/7973-sonarlint) - SonarLint 是 IntelliJ IDEA 插件，可向开发人员提供有关注入 Java 的新错误和质量问题的动态反馈。
- [String Manipulation](https://plugins.jetbrains.com/plugin/2162-string-manipulation) - 提供文本操作的动作，例如切换，大写，编码/解码等

### 免费版 (+ 付费专业版)

- [Crowdin](https://crowdin.com) - 更好，更快，更智能地翻译和管理流程
- [GitKraken](https://www.gitkraken.com) - 适用于 Windows，Mac 和 Linux 的最受欢迎的 Git GUI

## 鸿蒙 kotlin 相关

鸿蒙也是可以支持 kotlin 编程的，所以这一部分内容我们也在筹划中。未来将在此列举更多的优秀的 Kotlin 资源，供大家使用。

- [Spek](https://github.com/spekframework/spek) - Kotlin 的规范框架

## DevEco 快捷键

DevEco 的快捷键可以让开发工作流程快速流畅。让使用快捷键成为一种习惯，不要用鼠标来执行大多数操作。以下提供了一些最有用的快捷键。

_(目前仅提供 Windows 版本 DevEco 的快捷键，Mac 或其它版本的快捷键会在未来加入)_

**Note：将以下大部分快捷键中<kbd>Ctrl</kbd>换成<kbd>Command</kbd>就是 Mac 版的相同快捷键**

### 最常用的快捷键:

| 功能                                               |                      快捷键                       |
| :------------------------------------------------- | :-----------------------------------------------: |
| 搜索当前 Project 中的一切 (文件、类、变量、字符等) |        <kbd>Shift</kbd> + <kbd>Shift</kbd>        |
| 搜索当前 Project 中的 class                        |          <kbd>Ctrl</kbd> + <kbd>N</kbd>           |
| 搜索当前 Project 中所有的文本                      | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> |
| 搜索当前 Project 中的 file                         | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> |
| 搜索当前 Project 中的 action                       | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> |
| 在当前 file 中搜索字符                             |          <kbd>Ctrl</kbd> + <kbd>F</kbd>           |
| 显示最近在 IDE 中打开的 file                       |          <kbd>Ctrl</kbd> + <kbd>E</kbd>           |
| 运行（可以是 hap 或 test）                         |          <kbd>Ctrl</kbd> + <kbd>R</kbd>           |
| 在类、方法、变量的定义与引用之间跳转               |      <kbd>Ctrl</kbd> + <kbd>Left Click</kbd>      |
| 注释/取消注释所有选定行（也适用于 xml 文件）       |          <kbd>Ctrl</kbd> + <kbd>/</kbd>           |

### 常用的快捷键：

| 功能                                                     |                         快捷键                          |
| :------------------------------------------------------- | :-----------------------------------------------------: |
| 向上/向下移动一段代码                                    | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Up/Down</kbd> |
| 打开 DevEco 的说明文档                                   |                      <kbd>F1</kbd>                      |
| 显示当前方法所需的参数类型（光标需在方法名或参数括号内） |             <kbd>Ctrl</kbd> + <kbd>P</kbd>              |
| 格式化代码以匹配 DevEco 的默认样式                       |     <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>L</kbd>     |
| 删除光标后的第一个字符串                                 |           <kbd>Ctrl</kbd> + <kbd>Delete</kbd>           |

### 有用的快捷键

| 功能                                 |                        快捷键                         |
| :----------------------------------- | :---------------------------------------------------: |
| 将光标移动到下一个编写检查错误位置   |                     <kbd>F2</kbd>                     |
| 转到光标处变量/方法/类的声明         |            <kbd>Ctrl</kbd> + <kbd>B</kbd>             |
| 复制当前行并粘贴在下一行             |            <kbd>Ctrl</kbd> + <kbd>D</kbd>             |
| 在弹出窗口中显示类结构               |           <kbd>Ctrl</kbd> + <kbd>F12</kbd>            |
| 在弹出窗口中列出最近编辑的文件       |   <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>E</kbd>   |
| 【Git 相关】从 Git 远程仓 pull       |            <kbd>Ctrl</kbd> + <kbd>T</kbd>             |
| 【Git 相关】Commit 当前变更          |            <kbd>Ctrl</kbd> + <kbd>K</kbd>             |
| 【Git 相关】push 到 Git 远程仓       |   <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd>   |
| 折叠/展开所有代码块                  |  <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>+/-</kbd>  |
| 折叠/展开单个代码块                  |           <kbd>Ctrl</kbd> + <kbd>+/-</kbd>            |
| 在当前光标位置下方插入新行           |          <kbd>Shift</kbd> + <kbd>Enter</kbd>          |
| 完整语句（添加大括号、圆括号、分号） | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Enter</kbd> |

## 网站

提供一个网站列表，在上面可以找到最新的鸿蒙相关技术、新闻。

- [掘金\_HarmonyOS](https://juejin.cn/tag/%E9%B8%BF%E8%92%99OS) - 掘金的 HarmonyOS 板块
- [51CTO_HarmonyOS](https://harmonyos.51cto.com/) - 51CTO 的 HarmonyOS 技术社区
- [华为 Developers](https://developer.huawei.com/consumer/cn/forum/) - 华为官方的技术论坛
- [电子发烧友\_HarmonyOS 技术社区](https://bbs.elecfans.com/harmonyos) - 电子发烧友论坛的 HarmonyOS 技术社区

## 优秀文章

觉得直接在网站上找资料如大海捞针？没关系，我们已经为你精心挑选了一些干货满满的文章，相信你看完之后一定会有所收获。

- [OpenAtom 教育资源仓](https://gitee.com/openatom-university/openharmony-oer) - 大量的官方收入的教育资源集合
- [安卓 VS 鸿蒙第三方件切换宝典 V1.0](https://harmonyos.51cto.com/posts/3260)

* [鸿蒙内核源码分析](https://my.oschina.net/weharmony?tab=newest&catalogId=7082609)
* [Feature Ability 和 AbilitySlice 的关系](https://harmonyos.51cto.com/posts/2130)
* [使用绘图组件 Canvas 绘制心率曲线图](https://harmonyos.51cto.com/posts/2265)
* [多组示例演示三个样式的组合用法](https://harmonyos.51cto.com/posts/2266)
* [列表组件 ListContainer](https://harmonyos.51cto.com/posts/2168)
* [Linux 下的 Hi3861 一站式鸿蒙开发烧录（附工具）](https://harmonyos.51cto.com/posts/3333)

## 书籍

提供一些鸿蒙开发相关的书籍，帮助你系统地学习鸿蒙开发。

- [鸿蒙操作系统应用开发实践](https://item.jd.com/13336048.html) - 陈美汝、郑森文、武延军、吴敬征 - 本书针对 HarmonyOS SDK 4 版本，对鸿蒙操作系统的应用开发基础进行了梳理和介绍并同时，构建了一个在分布式场景非常常用的视频流直播实例作为实战的内容演练，进行了详细的分析和讲解。书籍包含 11 章教学课件，50 多个实例源代码，200 多分钟视频讲解，进一步帮助读者掌握核心知识点。
- [鸿蒙应用开发实战](https://item.jd.com/13066138.html) - 张荣超 - 第一本华为操作系统 HarmonyOS 开发图书，以 JavaScript 为开发语言，示例以华为智能手表为运行载体，提供完整源代码，详解国产鸿蒙操作系统。

## 视频教程

以下列表包含了一些鸿蒙开发的视频教程，从理论到实践全方面地学习鸿蒙开发。

- 北向开发
  - [HarmonyOS 2.0 开发入门](https://edu.51cto.com/course/25069.html?hm) - 将对 HarmonyOS 2.0 的应用开发有所理解，快速入门
  - [HarmonyOS(鸿蒙)App 项目实战（1）手表篇](https://edu.51cto.com/course/25054.html?hm) - 边做边学，学完之后就可以做出一个完整的 HarmonyOS（鸿蒙）运动手表上的 App
  - [HarmonyOS(鸿蒙)应用程序开发教程教你实现多时区电子时钟](https://edu.51cto.com/course/25274.html?hm) - 以 Java 语言为基础介绍 HarmonyOS 基础知识以及从零开始开发多时区电子时钟

* 南向开发
  - [Harmony 鸿蒙内核 Liteos-a 开发](https://edu.51cto.com/course/25146.html?hm) - 对鸿蒙内核 Liteos-a 有一个全面的理解

## 相关组织

如果您喜欢关注鸿蒙和 OpenHarmony 相关的最新新闻，了解系统的最新技术进展，了解在鸿蒙系统上的最新的优秀应用，那么关注这个列表准没错。这个列表挑选了一些目前在鸿蒙以及 OpenHarmony 生态圈中相当活跃的一些第三方组织。

- ISRC_OHOS:
  - [Gitee](https://gitee.com/isrc_ohos) - 开源大量实用的鸿蒙第三方库
  - [51CTO](https://harmonyos.51cto.com/column/41)、[知乎](https://www.zhihu.com/people/2016yao-nu-li-zuo-zhi-xue-ba) 、[CSDN](https://blog.csdn.net/vincenzsw/category_10667674.html) - 提供详细的鸿蒙第三方库分析与使用说明，干货满满。
- 深鸿会:

  - [Gitee](https://gitee.com/hiharmonica) - 提供鸿蒙开发者所需要的知识分享，经验传递，项目交流平台。

- 51CTOHarmonyOS 技术社区专栏:
  - [51CTO](https://harmonyos.51cto.com/column) - 大量的鸿蒙开发经验分享专栏，涉及各个方面，综合性较强。
- 软通动力 HarmonyOS 学院:

  - [Github](https://github.com/isoftstone-dev) - 开源大量实用的鸿蒙第三方库。
  - [51CTO](https://harmonyos.51cto.com/column/30) - 提供详细的鸿蒙第三方库分析与使用说明。

- HarmonyHub：

  - [Gitee](https://gitee.com/harmonyhub) - 提供鸿蒙操作系统开源组件库，讲解如何使用。

- scriptiot：

  - [Gitee](https://gitee.com/scriptiot) - 针对鸿蒙 OS 进行深度研究，提供 EVM 虚拟机在 Harmony OS 上的适配。

- hihopeorg:
  - [Gitee](https://gitee.com/hihopeorg_group) - 为 HarmonyOS 提供 tftp server，以及物联网应用开发知识。

## OpenHarmony JS 组件开发指南

[OpenHarmony JS Demo 开发讲解](https://gitee.com/isrc_ohos/ultimate-harmony-reference/blob/master/OpenHarmony%20JS%20Demo%E5%BC%80%E5%8F%91%E8%AE%B2%E8%A7%A3.md) - 讲解如何基于 OpenHarmony 开发 JS Demo，包括项目结构、JS FA、常用组件及自定义组件。

[OpenHarmony JS 项目开发流程](https://gitee.com/isrc_ohos/ultimate-harmony-reference/blob/master/OpenHarmony%20JS%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B.md) - 讲解基于 DevEco 开发 OpenHarmony JS 应用的基本流程，包括环境配置、工程导入、证书配置、推送运行等。

> 收录来自 [官方文档/OpenHarmony/docs](https://gitee.com/openharmony/docs)

此工程存放 OpenHarmony 提供的快速入门、开发指南、API 参考等开发者文档，欢迎参与 OpenHarmony 开发者文档开源项目，与我们一起完善开发者文档。

- [Openharmony 概述](OpenHarmony-Overview_zh.md)
- 轻量和小型系统开发指导（参考内存<128MB）
  - 设备开发
    - overview：[设备开发导读](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/Readme-CN.md)
    - quick-start：[快速入门](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/quick-start/Readme-CN.md)（搭建环境、获取源码、编译、烧录等）
    - Basic Capability：开发基础能力
      - Kernel：[轻量和小型系统内核](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/kernel/kernel.md)
      - Drivers：[驱动](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/driver/Readme-CN.md)
      - Subsystems：[子系统](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/subsystems/Readme-CN.md)（编译构建、图形图像、DFX、XTS 等子系统）
      - Security：[隐私与安全](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/security/Readme-CN.md)
    - guide：开发示例
      - [WLAN 连接类产品](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/guide/device-wifi.md)（LED 外设控制、集成三方 SDK）
      - [无屏摄像头类产品](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/guide/device-iotcamera-control.md)（摄像头控制）
      - [带屏摄像头类产品](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/guide/device-camera.md)（屏幕和摄像头控制、视觉应用开发）
    - porting：移植适配
      - [三方库移植指导](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/porting/transplant-thirdparty.md)
      - [轻量系统芯片移植指导](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/porting/transplant-minichip.md)
      - [小型系统芯片移植指导](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/porting/transplant-smallchip.md)
    - bundles：组件开发
      - [组件开发规范](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/bundles/bundles-standard-rules.md)
      - [组件开发指南](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/bundles/bundles-guide.md)
      - [组件开发示例](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/bundles/bundles-demo.md)
- 标准系统开发指导（参考内存 ≥128MB）
  - 设备开发
    - overview：[设备开发导读](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/Readme-CN.md)
    - quick-start：[快速入门](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/quick-start/quickstart-standard.md)（搭建环境、获取源码、编译、烧录等）
    - Basic Capability：开发基础能力
      - Kernel：[标准系统内核](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/kernel/kernel-standard.md)
      - Drivers：[驱动](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/driver/Readme-CN.md)
      - Subsystems：[子系统](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/subsystems/Readme-CN.md)（编译构建、图形图像、DFX、XTS 等子系统）
      - Security：[隐私与安全](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/security/Readme-CN.md)
    - guide：开发示例
      - [时钟应用](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/guide/device-clock-guide.md)
      - [平台驱动](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/guide/device-driver-demo.md)
      - [外设驱动](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/guide/device-outerdriver-demo.md)
    - porting：移植适配
      - [三方库移植指导](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/porting/transplant-thirdparty.md)
      - [标准系统芯片移植指导](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/porting/standard-system-porting-guide.md)
    - bundles：组件开发
      - [组件开发规范](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/bundles/bundles-standard-rules.md)
      - [组件开发指南](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/bundles/bundles-guide.md)
      - [组件开发示例](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/bundles/bundles-demo.md)
- 应用开发
  - overview：[应用开发导读](application-dev/application-dev-guide.md)
  - quick-start：[入门](application-dev/quick-start/Readme-CN.md)
  - ui：[UI](application-dev/ui/Readme-CN.md)
  - media：[媒体](application-dev/media/Readme-CN.md)
  - connectivity：[网络与连接](application-dev/connectivity/Readme-CN.md)
  - js-reference：[JS 参考规范](application-dev/js-reference/Readme-CN.md)
- 许可证及版权信息检查工具：[开源合规审查工具](https://gitee.com/openharmony-sig/tools_oat)
- glossary：[术语](https://gitee.com/openharmony/docs/blob/master/zh-cn/device-dev/glossary/glossary.md)

> 收录来自 [开放原子教育/OpenAtom OpenHarmony 教育资源仓](https://gitee.com/openatom-university/openharmony-oer)

- [OpenHarmonyAPP 开发学习源码体系](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmonyAPP%E5%BC%80%E5%8F%91%E5%AD%A6%E4%B9%A0%E6%BA%90%E7%A0%81%E4%BD%93%E7%B3%BB)
- [OpenHarmonyApp 开发\_2048 游戏讲稿](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmonyApp%E5%BC%80%E5%8F%91_2048%E6%B8%B8%E6%88%8F%E8%AE%B2%E7%A8%BF)
- [OpenHarmonyApp 开发\_从萌新到高手](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmonyApp%E5%BC%80%E5%8F%91_%E4%BB%8E%E8%90%8C%E6%96%B0%E5%88%B0%E9%AB%98%E6%89%8B)
- [OpenHarmony 三方组件开发指南](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmony%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97)
  - [OpenHarmony 三方组件开发指南/001 基于 OpenHarmony 系统的 Photoview 开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/001基于OpenHarmony系统的Photoview开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/002 基于 OpenHarmony 系统的 Logger 开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/002基于OpenHarmony系统的Logger开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/003 基于 OpenHarmony 系统的 AsyncHttpt 网络请求组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/003基于OpenHarmony系统的AsyncHttpt网络请求组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/004 基于 OpenHarmony 系统 compress 开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/004%20%E5%9F%BA%E4%BA%8EOpenHarmony%E7%B3%BB%E7%BB%9F%E7%9A%84compress%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97.pdf)
  - [OpenHarmony 三方组件开发指南/005 基于 OpenHarmony 系统的 ActiveOhos_sqllite 组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/005基于OpenHarmony系统的ActiveOhos_sqllite组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/006 基于 OpenHarmony 系统的 Matisse 三方件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/006基于OpenHarmony系统的Matisse三方件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/007 基于 OpenHarmony 系统的 HistogramComponent 柱状图三方件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/007基于OpenHarmony系统的HistogramComponent柱状图三方件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/008 基于 OpenHarmony 系统的 PrecentPositionLayout 组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/008基于OpenHarmony系统的PrecentPositionLayout组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/009 基于 OpenHarmony 系统的 refreshlayout 组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/009基于OpenHarmony系统的refreshlayout组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/010 基于 OpenHarmony 系统的 LoadingView 组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/010基于OpenHarmony系统的LoadingView组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/011 基于 OpenHarmony 系统的 EventBus 组件开发指南使用说明.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/011基于OpenHarmony系统的EventBus组件开发指南使用说明.pdf)
  - [OpenHarmony 三方组件开发指南/012 基于 OpenHarmony 系统的 Lottie 三方件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/012基于OpenHarmony系统的Lottie三方件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/013 基于 OpenHarmony 系统的 PageSlider 组件实现 Banner 开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/013基于OpenHarmony系统的PageSlider组件实现Banner开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/015 基于 OpenHarmony 系统的 RoundedImage 三方件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/015基于OpenHarmony系统的RoundedImage三方件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/016 基于 OpenHarmony 系统的 MaterialProgressBar 组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/016基于OpenHarmony系统的MaterialProgressBar组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/017 基于 OpenHarmony 系统的 CircleImageView 组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/017基于OpenHarmony系统的CircleImageView组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/018 基于 OpenHarmony 系统的 SwitchButton 组件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/018基于OpenHarmony系统的SwitchButton组件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/019.基于 OpenHarmony 系统的 Gif 三方件开发指南.pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony三方组件开发指南/019.基于OpenHarmony系统的Gif三方件开发指南.pdf)
  - [OpenHarmony 三方组件开发指南/020.基于 OpenHarmony 系统的 pickerView 三方件开发指南 .pdf](https://gitee.com/openatom-university/openharmony-oer/blob/master/OpenHarmony%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97/020.%E5%9F%BA%E4%BA%8EOpenHarmony%E7%B3%BB%E7%BB%9F%E7%9A%84pickerView%E4%B8%89%E6%96%B9%E4%BB%B6%E5%BC%80%E5%8F%91%E6%8C%87%E5%8D%97%20.pdf)
- [OpenHarmony 内核 Liteos-a 移植](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmony%E5%86%85%E6%A0%B8Liteos-a%E7%A7%BB%E6%A4%8D)
- [OpenHarmony 应用开发基础](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmony%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80)
- [OpenHarmony 硬件开发基础](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmony%E7%A1%AC%E4%BB%B6%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80)
- [OpenHarmony 组件库应用实践及进阶](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmony%E7%BB%84%E4%BB%B6%E5%BA%93%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5%E5%8F%8A%E8%BF%9B%E9%98%B6)
- [OpenHarmony 高校实验手册](https://gitee.com/openatom-university/openharmony-oer/tree/master/OpenHarmony%E9%AB%98%E6%A0%A1%E5%AE%9E%E9%AA%8C%E6%89%8B%E5%86%8C)
- [北京大学 2021 春季开源软件课程](https://gitee.com/openatom-university/openharmony-oer/tree/master/%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A62021%E6%98%A5%E5%AD%A3%E5%BC%80%E6%BA%90%E8%BD%AF%E4%BB%B6%E8%AF%BE%E7%A8%8B)
- [小熊派 OpenHarmony 设备开发系列教程](https://gitee.com/openatom-university/openharmony-oer/tree/master/%E5%B0%8F%E7%86%8A%E6%B4%BEOpenHarmony%E8%AE%BE%E5%A4%87%E5%BC%80%E5%8F%91%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B)
- [清华 2021 春季操作系统课程](https://gitee.com/openatom-university/openharmony-oer/tree/master/%E6%B8%85%E5%8D%8E2021%E6%98%A5%E5%AD%A3%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B)
- [物联网 IoT 鸿蒙 HiSpark 套件一站式培训教程](https://gitee.com/openatom-university/openharmony-oer/tree/master/%E7%89%A9%E8%81%94%E7%BD%91IoT%E9%B8%BF%E8%92%99HiSpark%E5%A5%97%E4%BB%B6%E4%B8%80%E7%AB%99%E5%BC%8F%E5%9F%B9%E8%AE%AD%E6%95%99%E7%A8%8B)
- [青少年 OpenHarmony 鸿蒙开源课程](https://gitee.com/openatom-university/openharmony-oer/tree/master/%E9%9D%92%E5%B0%91%E5%B9%B4OpenHarmony%E8%AF%BE%E7%A8%8B)

> 收录来自 [OpenHarmony/codelabs](https://gitee.com/openharmony/codelabs)

该 Codelabs 旨在向开发人员展示如何通过趣味场景来展示如何使用 HarmonyOS 能力的示例应用程序文档教程。

注意：IDE 版本及配套 SDK 问题可前往https://developer.harmonyos.com/cn/develop/deveco-studio#download 查看配套的 IDE、鸿蒙 SDK、插件及 Gradle 版本。

- ComponentCodelab: [展示 JAVA 通用组件用法](https://gitee.com/openharmony/codelabs/tree/master/ComponentCodelab)
- SimpleVideoCodelab：[使用视频接口能力实现一个简单的视频播放器](https://gitee.com/openharmony/codelabs/tree/master/SimpleVideoCodelab)
- DistributedVideoCodelab：[如何使用分布式能力进行视频跨设备播放及控制](https://gitee.com/openharmony/codelabs/tree/master/DistributedVideoCodelab)
- EducationSystem：[展示了分布式的早教算术题和拼图游戏的案例](https://gitee.com/openharmony/codelabs/tree/master/EducationSystem)
- HarmonyOSNewsClient：[展示了一个可以分享新闻详情页面的简易新闻客户端](https://gitee.com/openharmony/codelabs/tree/master/HarmonyOSNewsClient)
- DistributedMail：[展示了一个可以跨设备迁移和分布式文件调用的简易邮件编辑页面](https://gitee.com/openharmony/codelabs/tree/master/DistributedMail)
- ShoppingJs：[展示了一个使用 JS UI 组件开发的购物应用](https://gitee.com/openharmony/codelabs/tree/master/ShoppingJs)
- VoiceCamera：[展示了一个基于分布式文件系统和 AI 语音识别功能开发的分布式语音照相机](https://gitee.com/openharmony/codelabs/tree/master/VoiceCamera)
- JSPlaygroundDemo：[利用 HarmonyOS“一次开发、多端部署”特性，开发一个能同时运行在手机、大屏、运动表的“To-Do List”Demo](https://gitee.com/openharmony/codelabs/tree/master/JSPlaygroundDemo)
- RemoteInputDemo：[展示了通过手机输入文字到电视的跨设备输入能力](https://gitee.com/openharmony/codelabs/tree/master/RemoteInputDemo)
- DistributionGamePad：[分布式游戏手柄，可以通过手机端跨设备控制电视上的飞机游戏](https://gitee.com/openharmony/codelabs/tree/master/DistributionGamePad)
- AudioDemo：[音频播放相关管理应用包括音频播放、声音采集和音频相关管理（快进、快退、暂停、播放、音量控制）等功能](https://gitee.com/openharmony/codelabs/tree/master/AudioDemo)
- DistributedMapDemo：[展示简单的 HarmonyOS 分布式功能，可以通过应用程序模拟导航，在手机、智能穿戴和平板电脑之间进行导航数据流转](https://gitee.com/openharmony/codelabs/tree/master/DistributedMapDemo)

> 收录来自 [深鸿会/Awesome-HarmonyOS\_木棉花](https://gitee.com/hiharmonica/awesome-harmony-os-kapok)

鸿蒙系统的相关资源整合，由深圳大学学生团队负责，长期更新。  
最新更新的活动、比赛、项目等会加上西瓜标志

- [鸿蒙系统是什么](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙系统是什么)
- [鸿蒙系统的发展历程](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙系统的发展历程)
- [官方资源](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/官方资源)
- [鸿蒙社区](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙社区)
- [鸿蒙设备](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备)
  - [开发板](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/开发板) |[手表](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/手表)| [平板](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/平板) |[手机](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/手机)|[智慧屏](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/智慧屏)|[干衣机](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/干衣机)|[冰箱](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/冰箱)|[料理烹饪电器](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/料理烹饪电器)|[净水机](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/净水机)|[电热水器](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/电热水器)|[空调](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/空调)|[灯](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/灯)|[摄像头](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/摄像头)|[空气净化器](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/空气净化器)|[智能乳胶枕](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/智能乳胶枕)|[水杯](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/水杯)|[牙刷](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙设备/牙刷)
- [第三方包](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/第三方包)
- [鸿蒙项目](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙项目)
  - [代码解读](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙项目/代码解读)
  - [北向应用开发](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙项目/北向应用开发)
  - [南向设备开发](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙项目/南向设备开发)
  - [其他](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/鸿蒙项目/其他)
- [线下活动](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/线下活动)
- [线上活动与比赛](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/线上活动与比赛)
- [其他资源](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源)
  - [HarmonyOS 应用开发课程](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/HarmonyOS应用开发课程)
  - [HarmonyOS 职业认证](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/HarmonyOS职业认证)
  - [书](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/书)|[公众号](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/公众号)|[文章](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/文章)
  - [相关课程](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/相关课程)
  - [精华帖转载](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/精华帖转载)
  - [华为开发者学堂](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/其他资源/华为开发者学堂)
- [木棉花贡献者介绍](https://gitee.com/hiharmonica/awesome-harmony-os-kapok/tree/master/Awesome-HarmonyOS/木棉花贡献者介绍)

> 收录来自 [鸿蒙内核源码分析(源码注释篇)/WeHarmony/kernel_liteos_a_note](https://gitee.com/weharmony/kernel_liteos_a_note)

在加注过程中，整理出以下文章。内容立足源码，常以生活场景打比方尽可能多的将内核知识点置入某种场景，具有画面感，容易理解记忆。说别人能听得懂的话很重要! 百篇博客绝不是百度教条式的在说一堆诘屈聱牙的概念，那没什么意思。更希望让内核变得栩栩如生，倍感亲切.确实有难度，自不量力，但已经出发，回头已是不可能的了。

与代码有 bug 需不断 debug 一样，文章和注解内容会存在不少错漏之处，请多包涵，但会反复修正，持续更新，`.xx`代表修改的次数，精雕细琢，言简意赅，力求打造精品内容。

- [v62.xx 鸿蒙内核源码分析(文件概念篇) | 为什么说一切皆是文件 ](https://my.oschina.net/weharmony/blog/5152858) **[ | 51](https://harmonyos.51cto.com/posts/7460)[ .c](https://blog.csdn.net/kuangyufei/article/details/119217155)[ .h](http://weharmonyos.com/blog/62_文件概念篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v61.xx 鸿蒙内核源码分析(忍者 ninja 篇) | 都忍者了能不快吗 ](https://my.oschina.net/weharmony/blog/5139034) **[ | 51](https://harmonyos.51cto.com/posts/7328)[ .c](https://blog.csdn.net/kuangyufei/article/details/118970589)[ .h](http://weharmonyos.com/blog/61_忍者ninja篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v60.xx 鸿蒙内核源码分析(gn 应用篇) | gn 语法及在鸿蒙的使用 ](https://my.oschina.net/weharmony/blog/5137565) **[ | 51](https://harmonyos.51cto.com/posts/7310)[ .c](https://blog.csdn.net/kuangyufei/article/details/118932416)[ .h](http://weharmonyos.com/blog/60_gn应用篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v59.xx 鸿蒙内核源码分析(构建工具篇) | 顺瓜摸藤调试鸿蒙构建过程 ](https://my.oschina.net/weharmony/blog/5135157) **[ | 51](https://harmonyos.51cto.com/posts/7287)[ .c](https://blog.csdn.net/kuangyufei/article/details/118878233)[ .h](http://weharmonyos.com/blog/59_构建工具篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v58.xx 鸿蒙内核源码分析(环境脚本篇) | 编译鸿蒙原来如此简单 ](https://my.oschina.net/weharmony/blog/5132725) **[ | 51](https://harmonyos.51cto.com/posts/7248)[ .c](https://blog.csdn.net/kuangyufei/article/details/118765692)[ .h](http://weharmonyos.com/blog/58_编译脚本篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v57.xx 鸿蒙内核源码分析(编译过程篇) | 简单案例窥视 GCC 编译全过程 ](https://my.oschina.net/weharmony/blog/5064209) **[ | 51](https://harmonyos.51cto.com/posts/5032)[ .c](https://blog.csdn.net/kuangyufei/article/details/117419679)[ .h](http://weharmonyos.com/blog/57_编译过程篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v56.xx 鸿蒙内核源码分析(进程映像篇) | ELF 是如何被加载运行的? ](https://my.oschina.net/weharmony/blog/5060359) **[ | 51](https://harmonyos.51cto.com/posts/4815)[ .c](https://blog.csdn.net/kuangyufei/article/details/117325933)[ .h](http://weharmonyos.com/blog/56_进程映像篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v55.xx 鸿蒙内核源码分析(重定位篇) | 与国际接轨的对外部发言人 ](https://my.oschina.net/weharmony/blog/5055124) **[ | 51](https://harmonyos.51cto.com/posts/4519)[ .c](https://blog.csdn.net/kuangyufei/article/details/117110422)[ .h](http://weharmonyos.com/blog/55_重定位篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v54.xx 鸿蒙内核源码分析(静态链接篇) | 完整小项目看透静态链接过程 ](https://my.oschina.net/weharmony/blog/5049918) **[ | 51](https://harmonyos.51cto.com/posts/4430)[ .c](https://blog.csdn.net/kuangyufei/article/details/116835578)[ .h](http://weharmonyos.com/blog/54_静态链接篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v53.xx 鸿蒙内核源码分析(ELF 解析篇) | 你要忘了她姐俩你就不是银 ](https://my.oschina.net/weharmony/blog/5048746) **[ | 51](https://harmonyos.51cto.com/posts/4413)[ .c](https://blog.csdn.net/kuangyufei/article/details/116781446)[ .h](http://weharmonyos.com/blog/53_ELF解析篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v52.xx 鸿蒙内核源码分析(静态站点篇) | 五一哪也没去就干了这事 ](https://my.oschina.net/weharmony/blog/5042657) **[ | 51](https://harmonyos.51cto.com/posts/4312)[ .c](https://blog.csdn.net/kuangyufei/article/details/116517461)[ .h](http://weharmonyos.com/blog/52_静态站点篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v51.xx 鸿蒙内核源码分析(ELF 格式篇) | 应用程序入口并不是 main ](https://my.oschina.net/weharmony/blog/5030288) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/116097977)[ .h](http://weharmonyos.com/blog/51_ELF格式篇.html)[ .o](https://my.oschina.net/weharmony)**
- [v50.xx 鸿蒙内核源码分析(编译环境篇) | docker 编译鸿蒙真的很香 ](https://my.oschina.net/weharmony/blog/5028613) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/116042551)[ .h](http://weharmonyos.com/blog/50_编译环境篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v49.xx 鸿蒙内核源码分析(信号消费篇) | 谁让 CPU 连续四次换栈运行 ](https://my.oschina.net/weharmony/blog/5027224) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/115958293)[ .h](http://weharmonyos.com/blog/49_信号消费篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v48.xx 鸿蒙内核源码分析(信号生产篇) | 年过半百，依然活力十足 ](https://my.oschina.net/weharmony/blog/5022149) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/115768099)[ .h](http://weharmonyos.com/blog/48_信号生产篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v47.xx 鸿蒙内核源码分析(进程回收篇) | 临终前如何向老祖宗托孤 ](https://my.oschina.net/weharmony/blog/5017716) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/115672752)[ .h](http://weharmonyos.com/blog/47_进程回收篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v46.xx 鸿蒙内核源码分析(特殊进程篇) | 龙生龙凤生凤老鼠生儿会打洞 ](https://my.oschina.net/weharmony/blog/5014444) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/115556505)[ .h](http://weharmonyos.com/blog/46_特殊进程篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v45.xx 鸿蒙内核源码分析(Fork 篇) | 一次调用，两次返回 ](https://my.oschina.net/weharmony/blog/5010301) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/115467961)[ .h](http://weharmonyos.com/blog/45_Fork篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v44.xx 鸿蒙内核源码分析(中断管理篇) | 江湖从此不再怕中断 ](https://my.oschina.net/weharmony/blog/4995800) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/115130055)[ .h](http://weharmonyos.com/blog/44_中断管理篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v43.xx 鸿蒙内核源码分析(中断概念篇) | 海公公的日常工作 ](https://my.oschina.net/weharmony/blog/4992750) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/115014442)[ .h](http://weharmonyos.com/blog/43_中断概念篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v42.xx 鸿蒙内核源码分析(中断切换篇) | 系统因中断活力四射](https://my.oschina.net/weharmony/blog/4990948) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/114988891)[ .h](http://weharmonyos.com/blog/42_中断切换篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v41.xx 鸿蒙内核源码分析(任务切换篇) | 看汇编如何切换任务 ](https://my.oschina.net/weharmony/blog/4988628) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/114890180)[ .h](http://weharmonyos.com/blog/41_任务切换篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v40.xx 鸿蒙内核源码分析(汇编汇总篇) | 汇编可爱如邻家女孩 ](https://my.oschina.net/weharmony/blog/4977924) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/114597179)[ .h](http://weharmonyos.com/blog/40_汇编汇总篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v39.xx 鸿蒙内核源码分析(异常接管篇) | 社会很单纯，复杂的是人 ](https://my.oschina.net/weharmony/blog/4973016) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/114438285)[ .h](http://weharmonyos.com/blog/39_异常接管篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v38.xx 鸿蒙内核源码分析(寄存器篇) | 小强乃宇宙最忙存储器 ](https://my.oschina.net/weharmony/blog/4969487) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/114326994)[ .h](http://weharmonyos.com/blog/38_寄存器篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v37.xx 鸿蒙内核源码分析(系统调用篇) | 开发者永远的口头禅 ](https://my.oschina.net/weharmony/blog/4967613) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/114285166)[ .h](http://weharmonyos.com/blog/37_系统调用篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v36.xx 鸿蒙内核源码分析(工作模式篇) | CPU 是韦小宝，七个老婆 ](https://my.oschina.net/weharmony/blog/4965052) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/114168567)[ .h](http://weharmonyos.com/blog/36_工作模式篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v35.xx 鸿蒙内核源码分析(时间管理篇) | 谁是内核基本时间单位 ](https://my.oschina.net/weharmony/blog/4956163) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113867785)[ .h](http://weharmonyos.com/blog/35_时间管理篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v34.xx 鸿蒙内核源码分析(原子操作篇) | 谁在为原子操作保驾护航 ](https://my.oschina.net/weharmony/blog/4955290) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113850603)[ .h](http://weharmonyos.com/blog/34_原子操作篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v33.xx 鸿蒙内核源码分析(消息队列篇) | 进程间如何异步传递大数据 ](https://my.oschina.net/weharmony/blog/4952961) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113815355)[ .h](http://weharmonyos.com/blog/33_消息队列篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v32.xx 鸿蒙内核源码分析(CPU 篇) | 整个内核就是一个死循环 ](https://my.oschina.net/weharmony/blog/4952034) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113782749)[ .h](http://weharmonyos.com/blog/32_CPU篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v31.xx 鸿蒙内核源码分析(定时器篇) | 哪个任务的优先级最高 ](https://my.oschina.net/weharmony/blog/4951625) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113774260)[ .h](http://weharmonyos.com/blog/31_定时器篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v30.xx 鸿蒙内核源码分析(事件控制篇) | 任务间多对多的同步方案 ](https://my.oschina.net/weharmony/blog/4950956) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113759481)[ .h](http://weharmonyos.com/blog/30_事件控制篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v29.xx 鸿蒙内核源码分析(信号量篇) | 谁在负责解决任务的同步 ](https://my.oschina.net/weharmony/blog/4949720) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113744267)[ .h](http://weharmonyos.com/blog/29_信号量篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v28.xx 鸿蒙内核源码分析(进程通讯篇) | 九种进程间通讯方式速揽 ](https://my.oschina.net/weharmony/blog/4947398) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113700751)[ .h](http://weharmonyos.com/blog/28_进程通讯篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v27.xx 鸿蒙内核源码分析(互斥锁篇) | 比自旋锁丰满的互斥锁 ](https://my.oschina.net/weharmony/blog/4945465) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113660357)[ .h](http://weharmonyos.com/blog/27_互斥锁篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v26.xx 鸿蒙内核源码分析(自旋锁篇) | 自旋锁当立贞节牌坊 ](https://my.oschina.net/weharmony/blog/4944129) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113616250)[ .h](http://weharmonyos.com/blog/26_自旋锁篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v25.xx 鸿蒙内核源码分析(并发并行篇) | 听过无数遍的两个概念 ](https://my.oschina.net/u/3751245/blog/4940329) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113516222)[ .h](http://weharmonyos.com/blog/25_并发并行篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v24.xx 鸿蒙内核源码分析(进程概念篇) | 进程在管理哪些资源 ](https://my.oschina.net/u/3751245/blog/4937521) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113395872)[ .h](http://weharmonyos.com/blog/24_进程概念篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v23.xx 鸿蒙内核源码分析(汇编传参篇) | 如何传递复杂的参数 ](https://my.oschina.net/u/3751245/blog/4927892) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/113265990)[ .h](http://weharmonyos.com/blog/23_汇编传参篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v22.xx 鸿蒙内核源码分析(汇编基础篇) | CPU 在哪里打卡上班 ](https://my.oschina.net/u/3751245/blog/4920361) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/112986628)[ .h](http://weharmonyos.com/blog/22_汇编基础篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v21.xx 鸿蒙内核源码分析(线程概念篇) | 是谁在不断的折腾 CPU ](https://my.oschina.net/u/3751245/blog/4915543) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/112870193)[ .h](http://weharmonyos.com/blog/21_线程概念篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v20.xx 鸿蒙内核源码分析(用栈方式篇) | 程序运行场地由谁提供 ](https://my.oschina.net/u/3751245/blog/4893388) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/112534331)[ .h](http://weharmonyos.com/blog/20_用栈方式篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v19.xx 鸿蒙内核源码分析(位图管理篇) | 谁能一分钱分两半花 ](https://my.oschina.net/u/3751245/blog/4888467) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/112394982)[ .h](http://weharmonyos.com/blog/19_位图管理篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v18.xx 鸿蒙内核源码分析(源码结构篇) | 内核每个文件的含义 ](https://my.oschina.net/u/3751245/blog/4869137) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/111938348)[ .h](http://weharmonyos.com/blog/18_源码结构篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v17.xx 鸿蒙内核源码分析(物理内存篇) | 怎么管理物理内存 ](https://my.oschina.net/u/3751245/blog/4842408) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/111765600)[ .h](http://weharmonyos.com/blog/17_物理内存篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v16.xx 鸿蒙内核源码分析(内存规则篇) | 内存管理到底在管什么 ](https://my.oschina.net/u/3751245/blog/4698384) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/109437223)[ .h](http://weharmonyos.com/blog/16_内存规则篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v15.xx 鸿蒙内核源码分析(内存映射篇) | 虚拟内存虚在哪里 ](https://my.oschina.net/u/3751245/blog/4694841) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/109032636)[ .h](http://weharmonyos.com/blog/15_内存映射篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v14.xx 鸿蒙内核源码分析(内存汇编篇) | 谁是虚拟内存实现的基础 ](https://my.oschina.net/u/3751245/blog/4692156) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108994081)[ .h](http://weharmonyos.com/blog/14_内存汇编篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v13.xx 鸿蒙内核源码分析(源码注释篇) | 鸿蒙必定成功，也必然成功 ](https://my.oschina.net/u/3751245/blog/4686747) **[ | 51](https://harmonyos.51cto.com/posts/4049)[ .c](https://blog.csdn.net/kuangyufei/article/details/109251754)[ .h](http://weharmonyos.com/blog/13_源码注释篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v12.xx 鸿蒙内核源码分析(内存管理篇) | 虚拟内存全景图是怎样的 ](https://my.oschina.net/u/3751245/blog/4652284) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108821442)[ .h](http://weharmonyos.com/blog/12_内存管理篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v11.xx 鸿蒙内核源码分析(内存分配篇) | 内存有哪些分配方式 ](https://my.oschina.net/u/3751245/blog/4646802) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108989906)[ .h](http://weharmonyos.com/blog/11_内存分配篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v10.xx 鸿蒙内核源码分析(内存主奴篇) | 皇上和奴才如何相处 ](https://my.oschina.net/u/3751245/blog/4646802) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108723672)[ .h](http://weharmonyos.com/blog/10_内存主奴篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v09.xx 鸿蒙内核源码分析(调度故事篇) | 用故事说内核调度过程 ](https://my.oschina.net/u/3751245/blog/4634668) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108745174)[ .h](http://weharmonyos.com/blog/09_调度故事篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v08.xx 鸿蒙内核源码分析(总目录) | 百万汉字注解 百篇博客分析 ](https://my.oschina.net/weharmony/blog/4626852) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108727970)[ .h](http://weharmonyos.com/blog/08_总目录.html) [ .o](https://my.oschina.net/weharmony)**
- [v07.xx 鸿蒙内核源码分析(调度机制篇) | 任务是如何被调度执行的 ](https://my.oschina.net/u/3751245/blog/4623040) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108705968)[ .h](http://weharmonyos.com/blog/07_调度机制篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v06.xx 鸿蒙内核源码分析(调度队列篇) | 内核有多少个调度队列 ](https://my.oschina.net/u/3751245/blog/4606916) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108626671)[ .h](http://weharmonyos.com/blog/06_调度队列篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v05.xx 鸿蒙内核源码分析(任务管理篇) | 任务池是如何管理的 ](https://my.oschina.net/u/3751245/blog/4603919) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108661248)[ .h](http://weharmonyos.com/blog/05_任务管理篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v04.xx 鸿蒙内核源码分析(任务调度篇) | 任务是内核调度的单元 ](https://my.oschina.net/weharmony/blog/4595539) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108621428)[ .h](http://weharmonyos.com/blog/04_任务调度篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v03.xx 鸿蒙内核源码分析(时钟任务篇) | 触发调度谁的贡献最大 ](https://my.oschina.net/u/3751245/blog/4574493) **[ | 51](https://harmonyos.51cto.com/column/34)[ .c](https://blog.csdn.net/kuangyufei/article/details/108603468)[ .h](http://weharmonyos.com/blog/03_时钟任务篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v02.xx 鸿蒙内核源码分析(进程管理篇) | 谁在管理内核资源 ](https://my.oschina.net/u/3751245/blog/4574429) **[ | 51](https://harmonyos.51cto.com/posts/3926)[ .c](https://blog.csdn.net/kuangyufei/article/details/108595941)[ .h](http://weharmonyos.com/blog/02_进程管理篇.html) [ .o](https://my.oschina.net/weharmony)**
- [v01.xx 鸿蒙内核源码分析(双向链表篇) | 谁是内核最重要结构体 ](https://my.oschina.net/u/3751245/blog/4572304) **[ | 51](https://harmonyos.51cto.com/posts/3925)[ .c](https://blog.csdn.net/kuangyufei/article/details/108585659)[ .h](http://weharmonyos.com/blog/01_双向链表篇.html) [ .o](https://my.oschina.net/weharmony)**
