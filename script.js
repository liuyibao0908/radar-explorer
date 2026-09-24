/* =========================
   I18N (EN / ZH)
========================= */

const I18N = {

    en: {

        "page.title": "Radar Explorer",
        "page.description":
            "An interactive student research project exploring radar technology.",

        "nav.home": "Home",
                "nav.learn": "Learn",
                "nav.articles": "Articles",
                "nav.explore": "Explore",
                "nav.research": "Research",
                "nav.about": "About",

        "hero.status": "SYSTEM ONLINE",
        "hero.eyebrow": "A STUDENT RESEARCH PROJECT",
        "hero.title": "Seeing the Invisible",
        "hero.description":
            "Explore the science, technology, and applications behind radar — from electromagnetic waves to modern sensing systems.",
        "hero.cta": "START EXPLORING",
        "hero.scroll": "SCROLL TO EXPLORE",

        "readout.range": "RANGE",
        "readout.targets": "TARGETS",
        "readout.status": "STATUS",

        "status.scanning": "SCANNING",
        "status.tracking": "TRACKING",
        "status.searching": "SEARCHING",
        "range.unit": "km",

        "learn.labelNum": "01",
        "learn.labelName": "LEARN",
        "learn.title": "What Is Radar?",
        "learn.intro":
            "Radar is a sensing technology that uses electromagnetic waves to detect objects, measure distance, determine direction, and track movement.",
        "learn.f1.title": "Transmit",
        "learn.f1.text":
            "Radar sends electromagnetic waves into the environment.",
        "learn.f2.title": "Reflect",
        "learn.f2.text":
            "Objects reflect part of the transmitted energy back toward the radar.",
        "learn.f3.title": "Receive",
        "learn.f3.text":
            "The radar receives the reflected signal, known as an echo.",
        "learn.f4.title": "Calculate",
        "learn.f4.text":
            "Signal processing turns the echo into useful information.",

        "how.labelNum": "02",
        "how.labelName": "HOW IT WORKS",
        "how.title": "How Does Radar Work?",
        "how.intro":
            "Radar works by transmitting electromagnetic waves, receiving their echoes, and processing the returned signals to determine where objects are and how they move.",
        "how.s1.title": "Transmit",
        "how.s1.text":
            "The radar sends a pulse of electromagnetic energy into the environment.",
        "how.s2.title": "Reflect",
        "how.s2.text":
            "When the waves encounter an object, part of the energy is reflected back.",
        "how.s3.title": "Receive",
        "how.s3.text":
            "The radar antenna receives the reflected signal, known as an echo.",
        "how.s4.title": "Calculate",
        "how.s4.text":
            "Signal processing converts the echo into information about distance, direction, and motion.",
        "how.formulaLabel": "DISTANCE MEASUREMENT",
        "how.formulaText":
            "The distance to a target can be estimated from the time it takes for a radar signal to travel to the target and return.",

        "anatomy.labelNum": "03",
        "anatomy.labelName": "RADAR ANATOMY",
        "anatomy.title": "Explore the Radar System",
        "anatomy.intro":
            "A radar system is made of multiple components that work together to transmit signals, receive echoes, process data, and present useful information.",
        "anatomy.infoLabel": "SELECT A COMPONENT",
        "anatomy.fnLabel": "FUNCTION",
        "anatomy.roleLabel": "ROLE",
        "anatomy.part.antenna": "ANTENNA",
        "anatomy.part.transmitter": "TRANSMITTER",
        "anatomy.part.receiver": "RECEIVER",
        "anatomy.part.processor": "SIGNAL PROCESSOR",
        "anatomy.part.display": "DISPLAY",

        "anatomy.detail.antenna.title": "Antenna",
        "anatomy.detail.antenna.description":
            "The antenna transmits electromagnetic waves into the environment and receives the echoes reflected from objects.",
        "anatomy.detail.antenna.function": "Transmission & Reception",
        "anatomy.detail.antenna.role":
            "Sends and receives electromagnetic waves.",
        "anatomy.detail.transmitter.title": "Transmitter",
        "anatomy.detail.transmitter.description":
            "The transmitter generates the radio-frequency energy that the radar sends toward a target.",
        "anatomy.detail.transmitter.function": "Signal Generation",
        "anatomy.detail.transmitter.role":
            "Produces the electromagnetic signal.",
        "anatomy.detail.receiver.title": "Receiver",
        "anatomy.detail.receiver.description":
            "The receiver detects the weak signals that return to the radar after reflecting from objects.",
        "anatomy.detail.receiver.function": "Signal Reception",
        "anatomy.detail.receiver.role":
            "Captures and amplifies returning echoes.",
        "anatomy.detail.processor.title": "Signal Processor",
        "anatomy.detail.processor.description":
            "The signal processor analyzes received echoes, reduces unwanted noise, and extracts useful information about targets.",
        "anatomy.detail.processor.function": "Data Processing",
        "anatomy.detail.processor.role":
            "Turns raw echoes into useful information.",
        "anatomy.detail.display.title": "Display",
        "anatomy.detail.display.description":
            "The display presents processed radar information so that an operator or system can understand the detected environment.",
        "anatomy.detail.display.function": "Information Display",
        "anatomy.detail.display.role":
            "Presents detected targets and measurements.",

        "apps.labelNum": "04",
        "apps.labelName": "RADAR AROUND US",
        "apps.title": "Radar Around Us",
        "apps.intro":
            "Radar is not a single technology. Different radar systems are designed for different environments, measurements, and purposes.",
        "apps.detailLabel": "SELECTED APPLICATION",
        "apps.useLabel": "USED FOR",
        "apps.principleLabel": "KEY IDEA",

        "apps.card.weather.title": "Weather Radar",
        "apps.card.weather.text":
            "Observing precipitation and atmospheric motion.",
        "apps.card.automotive.title": "Automotive Radar",
        "apps.card.automotive.text":
            "Detecting vehicles, objects, and movement around cars.",
        "apps.card.aviation.title": "Air Traffic Radar",
        "apps.card.aviation.text":
            "Tracking aircraft and supporting air traffic management.",
        "apps.card.marine.title": "Marine Radar",
        "apps.card.marine.text":
            "Helping ships detect objects and navigate safely.",
        "apps.card.speed.title": "Speed Radar",
        "apps.card.speed.text":
            "Measuring the velocity of moving objects.",
        "apps.card.gpr.title": "Ground-Penetrating Radar",
        "apps.card.gpr.text":
            "Investigating structures and materials beneath the surface.",
        "apps.card.sar.title": "Synthetic Aperture Radar",
        "apps.card.sar.text":
            "Creating detailed images of Earth's surface.",
        "apps.card.space.title": "Space Radar",
        "apps.card.space.text":
            "Using radar from space to observe Earth and its environment.",

        "apps.detail.weather.title": "Weather Radar",
        "apps.detail.weather.description":
            "Weather radar detects precipitation and can provide information about the location, intensity, and movement of weather systems.",
        "apps.detail.weather.use": "Rainfall & Storm Monitoring",
        "apps.detail.weather.principle":
            "Reflected signals reveal information about precipitation.",
        "apps.detail.automotive.title": "Automotive Radar",
        "apps.detail.automotive.description":
            "Automotive radar uses radio waves to detect objects around vehicles and estimate their distance and relative motion.",
        "apps.detail.automotive.use": "Driver Assistance & Safety",
        "apps.detail.automotive.principle":
            "Range and Doppler measurements help detect nearby objects.",
        "apps.detail.aviation.title": "Air Traffic Radar",
        "apps.detail.aviation.description":
            "Air traffic radar helps detect and track aircraft by measuring their position, distance, and movement.",
        "apps.detail.aviation.use": "Aircraft Detection & Tracking",
        "apps.detail.aviation.principle":
            "Radar echoes provide information about aircraft position and motion.",
        "apps.detail.marine.title": "Marine Radar",
        "apps.detail.marine.description":
            "Marine radar helps ships detect nearby vessels, coastlines, and other objects, especially when visibility is limited.",
        "apps.detail.marine.use": "Navigation & Collision Awareness",
        "apps.detail.marine.principle":
            "Reflected signals reveal the location of objects around a vessel.",
        "apps.detail.speed.title": "Speed Radar",
        "apps.detail.speed.description":
            "Speed radar measures the motion of a target by analyzing changes in the frequency of the returned signal.",
        "apps.detail.speed.use": "Speed Measurement",
        "apps.detail.speed.principle":
            "The Doppler effect provides information about relative velocity.",
        "apps.detail.gpr.title": "Ground-Penetrating Radar",
        "apps.detail.gpr.description":
            "Ground-penetrating radar sends electromagnetic waves into the ground to investigate buried structures and changes in subsurface materials.",
        "apps.detail.gpr.use": "Subsurface Investigation",
        "apps.detail.gpr.principle":
            "Reflections from underground boundaries reveal subsurface structure.",
        "apps.detail.sar.title": "Synthetic Aperture Radar",
        "apps.detail.sar.description":
            "Synthetic aperture radar combines measurements collected from different positions to create detailed images of Earth's surface.",
        "apps.detail.sar.use": "Earth Observation",
        "apps.detail.sar.principle":
            "Multiple radar measurements can be combined to produce high-resolution imagery.",
        "apps.detail.space.title": "Space Radar",
        "apps.detail.space.description":
            "Radar instruments carried by satellites can observe Earth's surface and atmosphere, including areas hidden by clouds or darkness.",
        "apps.detail.space.use": "Earth Observation",
        "apps.detail.space.principle":
            "Radar can actively illuminate Earth's surface and measure returned signals.",

        "explore.labelNum": "05",
        "explore.labelName": "EXPLORE",
        "explore.title": "Go Deeper",
        "explore.intro":
            "Radar technology connects physics, engineering, signal processing, and real-world applications. Explore some of the topics behind modern radar systems.",
        "explore.t1.title": "Radar Components",
        "explore.t1.text":
            "Antennas, transmitters, receivers, signal processors, and more.",
        "explore.t2.title": "Radar Types",
        "explore.t2.text":
            "Explore different radar systems and the environments they are designed for.",
        "explore.t3.title": "Phased Array Radar",
        "explore.t3.text":
            "Learn how electronic beam steering changes modern radar systems.",
        "explore.t4.title": "Radar & Weather",
        "explore.t4.text":
            "Discover how radar helps us observe rain, storms, and severe weather.",

        "research.labelNum": "06",
        "research.labelName": "RESEARCH",
        "research.title": "From Curiosity to Research",
        "research.text":
            "This website is a student-led exploration of radar technology. The project combines scientific research, visual explanations, and web design to communicate complex ideas in an accessible way.",
        "research.cta": "VIEW RESEARCH NOTES",
        "research.logLabel": "PROJECT LOG",
        "research.l1.title": "Radar Fundamentals",
        "research.l2.title": "Radar Applications",
        "research.l3.title": "Modern Radar Systems",
        "research.l4.title": "Future Technologies",
        "research.status.complete": "COMPLETE",
        "research.status.progress": "IN PROGRESS",
        "research.status.planned": "PLANNED",

        "about.labelNum": "07",
        "about.labelName": "ABOUT",
        "about.title": "About This Project",
        "about.text":
            "Radar Explorer is an educational project designed to investigate how radar works, where it is used, and how radar technology continues to evolve.",
        "about.f1.label": "PROJECT TYPE",
        "about.f1.value": "Student Research",
        "about.f2.label": "FOCUS",
        "about.f2.value": "Radar Technology",
        "about.f3.label": "FORMAT",
        "about.f3.value": "Interactive Web Project",
        "about.f4.label": "YEAR",

        "footer.tagline":
            "Understanding the technology that helps us see the invisible.",
        "footer.kind": "Student Research Project"
    },

    zh: {

        "page.title": "雷达探索者",
        "page.description":
            "一个面向学生研究的交互式雷达技术科普项目。",

        "nav.home": "首页",
                "nav.learn": "学习",
                "nav.articles": "文章",
                "nav.explore": "探索",
                "nav.research": "研究",
                "nav.about": "关于",

        "hero.status": "系统在线",
        "hero.eyebrow": "学生研究项目",
        "hero.title": "看见不可见",
        "hero.description":
            "探索雷达背后的科学、技术与应用——从电磁波到现代传感系统。",
        "hero.cta": "开始探索",
        "hero.scroll": "向下滚动",

        "readout.range": "距离",
        "readout.targets": "目标",
        "readout.status": "状态",

        "status.scanning": "扫描中",
        "status.tracking": "跟踪中",
        "status.searching": "搜索中",
        "range.unit": "公里",

        "learn.labelNum": "01",
        "learn.labelName": "学习",
        "learn.title": "什么是雷达？",
        "learn.intro":
            "雷达是一种利用电磁波探测目标、测量距离、判断方向并跟踪运动的传感技术。",
        "learn.f1.title": "发射",
        "learn.f1.text": "雷达向环境中发射电磁波。",
        "learn.f2.title": "反射",
        "learn.f2.text": "物体将一部分电磁能量反射回雷达。",
        "learn.f3.title": "接收",
        "learn.f3.text": "雷达接收反射回来的信号,称为回波。",
        "learn.f4.title": "计算",
        "learn.f4.text": "信号处理将回波转换为有用的信息。",

        "how.labelNum": "02",
        "how.labelName": "工作原理",
        "how.title": "雷达是如何工作的？",
        "how.intro":
            "雷达通过发射电磁波、接收回波并处理返回信号,从而判断目标的位置与运动状态。",
        "how.s1.title": "发射",
        "how.s1.text": "雷达向环境中发射一束电磁能量脉冲。",
        "how.s2.title": "反射",
        "how.s2.text": "当电磁波遇到目标时,一部分能量被反射回来。",
        "how.s3.title": "接收",
        "how.s3.text": "雷达天线接收反射回来的信号,称为回波。",
        "how.s4.title": "计算",
        "how.s4.text":
            "信号处理将回波转换为目标的距离、方向与运动信息。",
        "how.formulaLabel": "距离测量",
        "how.formulaText":
            "可以通过雷达信号往返目标所用时间来估算目标距离。",

        "anatomy.labelNum": "03",
        "anatomy.labelName": "雷达结构",
        "anatomy.title": "了解雷达系统",
        "anatomy.intro":
            "雷达系统由多个组件协同工作,共同完成信号发射、回波接收、数据处理与信息呈现。",
        "anatomy.infoLabel": "选择一个组件",
        "anatomy.fnLabel": "功能",
        "anatomy.roleLabel": "作用",
        "anatomy.part.antenna": "天线",
        "anatomy.part.transmitter": "发射机",
        "anatomy.part.receiver": "接收机",
        "anatomy.part.processor": "信号处理器",
        "anatomy.part.display": "显示器",

        "anatomy.detail.antenna.title": "天线",
        "anatomy.detail.antenna.description":
            "天线向环境中发射电磁波,并接收物体反射回来的回波。",
        "anatomy.detail.antenna.function": "发射与接收",
        "anatomy.detail.antenna.role": "发射并接收电磁波。",
        "anatomy.detail.transmitter.title": "发射机",
        "anatomy.detail.transmitter.description":
            "发射机产生雷达向目标发射的射频能量。",
        "anatomy.detail.transmitter.function": "信号生成",
        "anatomy.detail.transmitter.role": "生成电磁信号。",
        "anatomy.detail.receiver.title": "接收机",
        "anatomy.detail.receiver.description":
            "接收机检测雷达从物体反射回来的微弱信号。",
        "anatomy.detail.receiver.function": "信号接收",
        "anatomy.detail.receiver.role": "捕获并放大返回的回波。",
        "anatomy.detail.processor.title": "信号处理器",
        "anatomy.detail.processor.description":
            "信号处理器分析接收到的回波,降低噪声并提取有用的目标信息。",
        "anatomy.detail.processor.function": "数据处理",
        "anatomy.detail.processor.role": "将原始回波转换为有用的信息。",
        "anatomy.detail.display.title": "显示器",
        "anatomy.detail.display.description":
            "显示器将处理后的雷达信息呈现出来,便于操作员或系统理解探测到的环境。",
        "anatomy.detail.display.function": "信息显示",
        "anatomy.detail.display.role": "呈现探测到的目标与测量结果。",

        "apps.labelNum": "04",
        "apps.labelName": "身边的雷达",
        "apps.title": "身边的雷达",
        "apps.intro":
            "雷达并不是单一技术。不同的雷达系统针对不同环境、测量方式与应用目的而设计。",
        "apps.detailLabel": "已选应用",
        "apps.useLabel": "用途",
        "apps.principleLabel": "原理",

        "apps.card.weather.title": "气象雷达",
        "apps.card.weather.text": "观测降水与大气的运动。",
        "apps.card.automotive.title": "汽车雷达",
        "apps.card.automotive.text": "探测车辆周围的物体与运动。",
        "apps.card.aviation.title": "空中交通雷达",
        "apps.card.aviation.text": "跟踪飞机并辅助空中交通管理。",
        "apps.card.marine.title": "航海雷达",
        "apps.card.marine.text": "帮助船只探测目标并安全航行。",
        "apps.card.speed.title": "测速雷达",
        "apps.card.speed.text": "测量运动物体的速度。",
        "apps.card.gpr.title": "探地雷达",
        "apps.card.gpr.text": "探测地表以下的结构与物质。",
        "apps.card.sar.title": "合成孔径雷达",
        "apps.card.sar.text": "生成地表的高分辨率图像。",
        "apps.card.space.title": "太空雷达",
        "apps.card.space.text": "从太空用雷达观测地球及其环境。",

        "apps.detail.weather.title": "气象雷达",
        "apps.detail.weather.description":
            "气象雷达探测降水,并可提供天气系统的位置、强度与移动信息。",
        "apps.detail.weather.use": "降雨与风暴监测",
        "apps.detail.weather.principle": "反射信号揭示降水信息。",
        "apps.detail.automotive.title": "汽车雷达",
        "apps.detail.automotive.description":
            "汽车雷达利用无线电波探测车辆周围的物体,并估算其距离与相对运动。",
        "apps.detail.automotive.use": "辅助驾驶与安全",
        "apps.detail.automotive.principle":
            "通过距离与多普勒测量探测附近物体。",
        "apps.detail.aviation.title": "空中交通雷达",
        "apps.detail.aviation.description":
            "空中交通雷达通过测量飞机的位置、距离与运动来探测和跟踪飞机。",
        "apps.detail.aviation.use": "飞机探测与跟踪",
        "apps.detail.aviation.principle": "雷达回波提供飞机的位置与运动信息。",
        "apps.detail.marine.title": "航海雷达",
        "apps.detail.marine.description":
            "航海雷达帮助船只探测附近的船舶、岸线以及其他物体,尤其在能见度有限时。",
        "apps.detail.marine.use": "导航与避碰",
        "apps.detail.marine.principle": "反射信号揭示船周围物体的位置。",
        "apps.detail.speed.title": "测速雷达",
        "apps.detail.speed.description":
            "测速雷达通过分析回波信号的频率变化来测量目标的运动。",
        "apps.detail.speed.use": "速度测量",
        "apps.detail.speed.principle": "多普勒效应提供相对速度信息。",
        "apps.detail.gpr.title": "探地雷达",
        "apps.detail.gpr.description":
            "探地雷达向地下发射电磁波,用于探测地下结构与浅层物质变化。",
        "apps.detail.gpr.use": "地下探测",
        "apps.detail.gpr.principle": "地下界面的反射揭示地下结构。",
        "apps.detail.sar.title": "合成孔径雷达",
        "apps.detail.sar.description":
            "合成孔径雷达将不同位置的测量结果合成,生成地表的高分辨率图像。",
        "apps.detail.sar.use": "对地观测",
        "apps.detail.sar.principle":
            "多个雷达测量结果可合成高分辨率图像。",
        "apps.detail.space.title": "太空雷达",
        "apps.detail.space.description":
            "搭载在卫星上的雷达可观测地球表面与大气,即使在云层遮挡或黑暗中也能工作。",
        "apps.detail.space.use": "对地观测",
        "apps.detail.space.principle":
            "雷达可主动照射地表并测量返回信号。",

        "explore.labelNum": "05",
        "explore.labelName": "深入",
        "explore.title": "深入探索",
        "explore.intro":
            "雷达技术融合了物理、工程、信号处理与实际应用。以下是现代雷达系统涉及的部分主题。",
        "explore.t1.title": "雷达组件",
        "explore.t1.text": "天线、发射机、接收机、信号处理器等。",
        "explore.t2.title": "雷达种类",
        "explore.t2.text": "了解不同雷达系统及其适用环境。",
        "explore.t3.title": "相控阵雷达",
        "explore.t3.text": "了解电子波束扫描如何改变现代雷达系统。",
        "explore.t4.title": "雷达与气象",
        "explore.t4.text": "发现雷达如何帮助我们观测降雨、风暴与极端天气。",

        "research.labelNum": "06",
        "research.labelName": "研究",
        "research.title": "从好奇到研究",
        "research.text":
            "本网站是由学生主导的雷达技术探索项目,结合了科学研究、可视化讲解与网页设计,以通俗易懂的方式呈现复杂概念。",
        "research.cta": "查看研究笔记",
        "research.logLabel": "项目日志",
        "research.l1.title": "雷达基础",
        "research.l2.title": "雷达应用",
        "research.l3.title": "现代雷达系统",
        "research.l4.title": "未来技术",
        "research.status.complete": "已完成",
        "research.status.progress": "进行中",
        "research.status.planned": "计划中",

        "about.labelNum": "07",
        "about.labelName": "关于",
        "about.title": "关于本项目",
        "about.text":
            "雷达探索者(Radar Explorer)是一个教育项目,旨在研究雷达的工作原理、应用场景以及未来发展。",
        "about.f1.label": "项目类型",
        "about.f1.value": "学生研究",
        "about.f2.label": "研究主题",
        "about.f2.value": "雷达技术",
        "about.f3.label": "呈现形式",
        "about.f3.value": "交互式网页项目",
        "about.f4.label": "年份",

        "footer.tagline": "理解让我们看见不可见的技术。",
        "footer.kind": "学生研究项目"
    }

};


const STORAGE_KEY = "radar-explorer.lang";
const DEFAULT_LANG = "en";

let currentLang = (() => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "en" || saved === "zh") {
            return saved;
        }
    } catch (e) {
        /* localStorage may be disabled */
    }

    const browser =
        (navigator.language || "en").toLowerCase();
    return browser.startsWith("zh") ? "zh" : "en";
})();


function t(key) {
    const dict = I18N[currentLang] || I18N[DEFAULT_LANG];
    return dict[key] !== undefined
        ? dict[key]
        : (I18N[DEFAULT_LANG][key] !== undefined
            ? I18N[DEFAULT_LANG][key]
            : key);
}


function applyStaticI18n() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.textContent = t(el.getAttribute("data-i18n"));
    });

    document
        .querySelectorAll("[data-i18n-attr]")
        .forEach(el => {
            const [attr, key] =
                el.getAttribute("data-i18n-attr").split("|");
            if (attr && key) {
                el.setAttribute(attr, t(key));
            }
        });

    const langLabel =
        document.querySelector("[data-lang-label]");
    if (langLabel) {
        langLabel.textContent =
            currentLang === "zh" ? "EN" : "中";
    }
}


function setLanguage(lang) {
    if (lang !== "en" && lang !== "zh") {
        return;
    }

    currentLang = lang;

    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
        /* ignore */
    }

    applyStaticI18n();

    // Refresh dynamic panels that already show translated
    // content; their data dictionaries are i18n-aware.
    if (activeAnatomyPart) {
        renderAnatomy(activeAnatomyPart);
    }
    if (activeApplication) {
        renderApplication(activeApplication);
    }

    // The radar readout regenerates on its own interval,
    // but trigger one update now so the unit/label switch
    // is visible immediately.
    updateRadarReadout();
}


function initLanguageToggle() {
    const btn =
        document.querySelector("[data-lang-toggle]");
    if (!btn) {
        return;
    }

    btn.addEventListener("click", () => {
        setLanguage(currentLang === "zh" ? "en" : "zh");
    });
}


/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton =
    document.querySelector(".menu-button");

const mobileNav =
    document.querySelector(".mobile-nav");


if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

        const isOpen =
            mobileNav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuButton.textContent =
            isOpen ? "×" : "☰";

    });


    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
            menuButton.textContent = "☰";

        });

    });

}


/* =========================
   HERO RADAR READOUT
========================= */

const rangeValue =
    document.getElementById("range-value");

const targetCount =
    document.getElementById("target-count");

const radarStatus =
    document.getElementById("radar-status");


const radarTargets =
    document.querySelectorAll(".radar-target");


let lastSweepAngle = 0;


function updateRadarReadout() {

    if (!rangeValue || !targetCount || !radarStatus) {
        return;
    }


    const range =
        (18 + Math.random() * 16).toFixed(1);

    rangeValue.textContent =
        `${range} ${t("range.unit")}`;


    const count =
        Math.max(
            2,
            Math.min(
                6,
                radarTargets.length +
                Math.floor(Math.random() * 3) - 1
            )
        );

    targetCount.textContent =
        String(count).padStart(2, "0");


    const statuses = [
        t("status.scanning"),
        t("status.tracking"),
        t("status.scanning"),
        t("status.searching")
    ];

    radarStatus.textContent =
        statuses[
            Math.floor(
                Math.random() * statuses.length
            )
        ];

}


setInterval(
    updateRadarReadout,
    1800
);

updateRadarReadout();


/* =========================
   RADAR TARGET INTERACTION
========================= */

radarTargets.forEach(target => {

    target.addEventListener("mouseenter", () => {

        target.classList.add("detected");

    });


    target.addEventListener("mouseleave", () => {

        target.classList.remove("detected");

    });

});


/* =========================
   RADAR SWEEP ACTIVITY
========================= */

const radarSweep =
    document.querySelector(".radar-sweep");


if (radarSweep) {

    radarSweep.addEventListener(
        "animationiteration",
        () => {

            radarStatus.textContent =
                t("status.scanning");

            radarTargets.forEach(target => {

                target.classList.remove("detected");

            });

        }
    );

}


/* =========================
   RADAR ANATOMY
========================= */

const ANATOMY_PARTS = [
    "antenna",
    "transmitter",
    "receiver",
    "processor",
    "display"
];


const anatomyButtons =
    document.querySelectorAll(".anatomy-part");

const anatomyTitle =
    document.getElementById("anatomy-title");

const anatomyDescription =
    document.getElementById("anatomy-description");

const anatomyFunction =
    document.getElementById("anatomy-function");

const anatomyRole =
    document.getElementById("anatomy-role");

let activeAnatomyPart = "antenna";


function renderAnatomy(part) {

    const title = t(`anatomy.detail.${part}.title`);
    const description =
        t(`anatomy.detail.${part}.description`);
    const fn = t(`anatomy.detail.${part}.function`);
    const role = t(`anatomy.detail.${part}.role`);

    if (anatomyTitle) {
        anatomyTitle.textContent = title;
    }
    if (anatomyDescription) {
        anatomyDescription.textContent = description;
    }
    if (anatomyFunction) {
        anatomyFunction.textContent = fn;
    }
    if (anatomyRole) {
        anatomyRole.textContent = role;
    }
}


anatomyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const part =
            button.getAttribute("data-part");

        if (!ANATOMY_PARTS.includes(part)) {
            return;
        }

        anatomyButtons.forEach(item => {

            item.classList.remove("active");

        });

        button.classList.add("active");
        activeAnatomyPart = part;
        renderAnatomy(part);

    });

});


/* =========================
   RADAR APPLICATIONS
========================= */

const APPLICATION_KEYS = [
    "weather",
    "automotive",
    "aviation",
    "marine",
    "speed",
    "gpr",
    "sar",
    "space"
];


const applicationCards =
    document.querySelectorAll(".application-card");

const applicationTitle =
    document.getElementById("application-title");

const applicationDescription =
    document.getElementById("application-description");

const applicationUse =
    document.getElementById("application-use");

const applicationPrinciple =
    document.getElementById("application-principle");

let activeApplication = "weather";


function renderApplication(application) {

    const title = t(`apps.detail.${application}.title`);
    const description =
        t(`apps.detail.${application}.description`);
    const use = t(`apps.detail.${application}.use`);
    const principle =
        t(`apps.detail.${application}.principle`);

    if (applicationTitle) {
        applicationTitle.textContent = title;
    }
    if (applicationDescription) {
        applicationDescription.textContent = description;
    }
    if (applicationUse) {
        applicationUse.textContent = use;
    }
    if (applicationPrinciple) {
        applicationPrinciple.textContent = principle;
    }
}


applicationCards.forEach(card => {

    card.addEventListener("click", () => {

        const application =
            card.getAttribute("data-application");

        if (!APPLICATION_KEYS.includes(application)) {
            return;
        }

        applicationCards.forEach(item => {

            item.classList.remove("active");

        });

        card.classList.add("active");
        activeApplication = application;
        renderApplication(application);

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .process-step, .topic-card, .application-card"
    );


if (
    "IntersectionObserver" in window &&
    revealElements.length
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            element.classList.add(
                "reveal-ready"
            );

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


if (
    "IntersectionObserver" in window &&
    sections.length &&
    navLinks.length
) {

    const navObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(link => {

                            link.classList.remove(
                                "active"
                            );

                            if (
                                link.getAttribute(
                                    "href"
                                ) ===
                                `#${entry.target.id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        });

                    }

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        section => {

            navObserver.observe(
                section
            );

        }
    );

}


/* =========================
   BOOT
========================= */

applyStaticI18n();
renderAnatomy(activeAnatomyPart);
renderApplication(activeApplication);
updateRadarReadout();
initLanguageToggle();
