webpackJsonp([97786326051841],{399:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Laura Domine",subtitle:"Physics Ph.D. student",copyright:"Powered by Gatsby. © All rights reserved.",menu:[{label:"Articles",path:"/"},{label:"Projects",path:"/projects"},{label:"About",path:"/about/"},{label:"Contact",path:"/contact/"}],author:{name:"Laura Domine",email:"ldomine@stanford.edu",telegram:"#",twitter:"#",github:"Temigo",rss:"#",vk:"#"}}},markdownRemark:{id:"/home/mai-hien/hummingbird2/src/projects/articles/2018-05-13--projects/index.md absPath of file >>> MarkdownRemark",html:'<p>I enjoy(ed) working on these besides my research (in bold projects still ongoing):</p>\n<ul>\n<li><strong><a href="#cloud-removal-in-hyperspectral-satellite-images-using-generative-adversarial-networks">Cloud Removal in Hyperspectral Satellite Images using Generative Adversarial Networks</a></strong></li>\n<li><strong><a href="#yup&#x27;ik-eskimo-and-machine-translation-for-low-resource-polysynthetic-languages">Yup’ik Eskimo and Machine Translation for Low-Resource Polysynthetic Languages</a></strong></li>\n<li><a href="#whisper-app-rumour-source-detection">Whisper App: Rumour source detection</a></li>\n</ul>\n<h2>Cloud Removal in Hyperspectral Satellite Images using Generative Adversarial Networks</h2>\n<p><em>Apr. 2018 - ongoing</em></p>\n<p>Won Best Solo prize and Best Satellogic data use at <a href="https://bigearthhacks.stanford.edu/">Stanford Big Earth Hackathon</a>.</p>\n<p>Satellite imagery can be used to monitor the environment or predict disasters and enable quick responses. Clouds bring uneven illumination, blurring and occlusion of the target. Satellite images are traditionally multispectral, i.e. include only a few wavelengths. Hyperspectral images include numerous wavelengths, including near-infrared, and are becoming more widely available. Finally, Generative Adversarial Networks (GANs) are among the most successful unsupervised techniques for generating realistic images by training 2 networks in competition (generator vs discriminator).</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/lakeeriebloom_800-055392ce0a406ce13ac9ec194ea6fa3a-00f86.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAByVk5PRHi/wD/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADERMS/9oACAEBAAEFAmI5lsFVeo6wKS3XxP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAIABwAAAAAAAAAAAAAAAAARARASMUFRYf/aAAgBAQAGPwJZiK4zkqdH/8QAGBABAAMBAAAAAAAAAAAAAAAAAQARITH/2gAIAQEAAT8hEA1ALqruRSxs5pFKc2UzLMz/2gAMAwEAAgADAAAAEAsP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAwEBPxB2mH//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAECAQE/EFNKf//EABwQAQADAAIDAAAAAAAAAAAAAAEAESExQWFxgf/aAAgBAQABPxCpqdrioJAHkwi3bb2KC1RiunVQBVgL9nh4X1P/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Image Credit:\nNASA Goddard Space Flight Center"\n        title=""\n        src="/static/lakeeriebloom_800-055392ce0a406ce13ac9ec194ea6fa3a-00f86.jpg"\n        srcset="/static/lakeeriebloom_800-055392ce0a406ce13ac9ec194ea6fa3a-6a66e.jpg 240w,\n/static/lakeeriebloom_800-055392ce0a406ce13ac9ec194ea6fa3a-bc76f.jpg 480w,\n/static/lakeeriebloom_800-055392ce0a406ce13ac9ec194ea6fa3a-00f86.jpg 800w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Image Credit:\nNASA Goddard Space Flight Center</em></p>\n<p>I proposed to apply GANs to hyperspectral satellite images in order to generate the missing patches from below the clouds. I devised and implemented the whole data pre-processing pipeline which includes classifying satellite images patches as cloudy/clear and synthesizing cloud masks.</p>\n<p><a href="https://devpost.com/software/kumo-san">DevPost</a> -\n<a href="http://stanford.edu/~ldomine/ICME_LDomine.pdf">Invited poster at ICME Xpo 2018</a></p>\n<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Congratulations to Laura, who won 2! awards at <a href="https://twitter.com/Stanford?ref_src=twsrc%5Etfw">@Stanford</a> <a href="https://twitter.com/hashtag/BigEarthHacks?src=hash&amp;ref_src=twsrc%5Etfw">#BigEarthHacks</a>: best solo team &amp; best <a href="https://twitter.com/Satellogic?ref_src=twsrc%5Etfw">@Satellogic</a> use 👏♥️👩‍💻. Prize includes tasking our satellites to her favorite spot. Her work:  <a href="https://t.co/nJ9CYceZBW">https://t.co/nJ9CYceZBW</a> <a href="https://t.co/sgDdnqME2x">pic.twitter.com/sgDdnqME2x</a></p>&mdash; Bruno Sánchez-Andrade Nuño (@brunosan) <a href="https://twitter.com/brunosan/status/985694650231996416?ref_src=twsrc%5Etfw">16 April 2018</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n<h2>Yup’ik Eskimo and Machine Translation for Low-Resource Polysynthetic Languages</h2>\n<p><em>Jan. 2018 - ongoing, with Christopher W. Liu</em></p>\n<p>Won 1st prize (based on the reports) for the course project of <a href="http://cs224n.stanford.edu">CS224n - Natural Language Processing with Deep Learning</a>.</p>\n<p>Machine translation tools do not yet exist for the Yup’ik Eskimo language. It is an endangered language spoken by around 8,000 people who primarily live in Southwest Alaska. We created a dataset of Yup’ik Eskimo / English parallel text (~100k sentences) and developed a pipeline for reliable translation of this language pair.</p>\n<p>We wrote a morphological rule-based parser for the Yup’ik Eskimo language and compared it with other unsupervised tokenization methods. We trained a bidirectional LSTM model with attention and reached a BLEU score of 13 using Byte-Pair Encoding, an unsupervised tokenization method.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/yupik-cf822b7a53df6fedf41898df89b2802f-e39c0.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.53225806451614%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAQpLhUm50Z//xAAaEAACAwEBAAAAAAAAAAAAAAABAwACIgQR/9oACAEBAAEFAjkB1qrHQwRep7gGf//EABURAQEAAAAAAAAAAAAAAAAAABAh/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGq/8QAHBAAAwABBQAAAAAAAAAAAAAAAAEhQRARMWHh/9oACAEBAAY/AlPCNwjd7Hvgbzzp/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAERITFBgf/aAAgBAQABPyGwWJTU6I20wtt6sM+iMnpLDWf/2gAMAwEAAgADAAAAEMMv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAwEBPxAEzu9v/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAExQfD/2gAIAQIBAT8QbOjJP//EAB0QAQACAwADAQAAAAAAAAAAAAERMQAhQVGBkfD/2gAIAQEAAT8QCwOw+BDr99ytt0bubv1juBS2aF5VYJplGerveTmSgCXTWArKboz/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Students"\n        title=""\n        src="/static/yupik-cf822b7a53df6fedf41898df89b2802f-d564d.jpg"\n        srcset="/static/yupik-cf822b7a53df6fedf41898df89b2802f-865fd.jpg 240w,\n/static/yupik-cf822b7a53df6fedf41898df89b2802f-d40a0.jpg 480w,\n/static/yupik-cf822b7a53df6fedf41898df89b2802f-d564d.jpg 960w,\n/static/yupik-cf822b7a53df6fedf41898df89b2802f-e39c0.jpg 992w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n<em>Yup’ik names of children  (Marc Lester / ADN)</em></p>\n<p>We are now working on the development of <strong>Yuarcuun</strong>, a translation and dictionary tool for Yup’ik Eskimo which will be available online to help revitalize the language.</p>\n<p><a href="http://web.stanford.edu/class/cs224n/reports/6907893.pdf">Final Report</a> -\n<a href="https://github.com/cwtliu/yupik-mt">Machine Translation Code</a> -\n<a href="https://github.com/Temigo/yuarcuun-api">Yuarcuun API Code</a> -\n<a href="https://github.com/Temigo/yuarcuun-web">Yuarcuun Web interface</a></p>\n<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Byte pair encodings as good as morphological analysis based on Morfessor for low resource machine translation on Yup&#39;ik Eskimo to English. <a href="https://t.co/hdauwgEQUG">pic.twitter.com/hdauwgEQUG</a></p>&mdash; Richard (@RichardSocher) <a href="https://twitter.com/RichardSocher/status/976647886099263488?ref_src=twsrc%5Etfw">22 March 2018</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n<h2>Whisper App: Rumour source detection</h2>\n<p><em>Sep. 2015 - June 2016. Under the supervision of <a href="http://pages.saclay.inria.fr/laurent.massoulie/index.htm">Laurent Massoulié</a>. With Mickaël Latocca, Rémi Said, Louis Lallemand, Quentin Bertrand, Henri Bourdeau, Carolina Garcia.</em></p>\n<p>Finding the source of an epidemics can be crucial in many ways: cascading failures and the resulting black-outs are critical for energy distribution networks, virus epidemics that wreak havoc but could be neutralized faster if only we understood where it came from, fake informations spreading on social networks that can have serious consequences for financial markets… Around 2010 some researchers started looking into algorithms to automatically detect the origin of an epidemics given the contaminated graph (or part of it).</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/graph1-2d8e31f310dccd55ea659dd99ce1b37e-f96c0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 240px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 132.08333333333334%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAIAAAA44esqAAAACXBIWXMAAAsSAAALEgHS3X78AAAC40lEQVQ4y52U208TQRTG+S9NNMb4oi/oqy9EE2NiQnzxkWggASUmxitBxAdRiNyLXFpaQlPa2gttd7szO/eZ3VnPsqXFSok4T2dn53fmm++cmaFowNg4xKUmh8DaQUuioUE/MFVMqMCYwexg2ABmbRAEWmsug3P3HwgHJzAEUpvFtEu4vgTcJgpRZbSSSq0cIERloU4yZXLWhXPg5NdeieR+4QiEhyFgTGgXi5rL1w48l+hkWQ9mKmhg2UthIzgwnBxi2B6iIM4TNJHUge3tHITxx6fd2q3JjT4V4BbwIF7F8nUYhjCJqPaoOSPbWp+Juksgff8pwjBXcasOsoEB8SBhv+znKrQDVz3hEZGUB3ZI0p/mBFF2eDo1tXQQabacdfI1wELblX17KjW7U4VASA2rQaIyYVJkqTTnrNpwWq7HKHXayCckXfJdcirbIUKo2EBKa63mAlTl6rPVUhNVHHxjfL1cbzHiw6khV7WFXc/PlFChwTsweAieQOC111M7dz3Cv2UqiFBE2NzPYhthxigYJzjbzKNyg7QQ3z7yu4bBEUKpYiWj87nHs2mwmXHeJvpnHiEMSqkQAvRjjCEAU5I+ieGiS1+tFZOS1hDPlptKyvjAElYG99/vTiweQpvuFLxsGXW7qAMvHbbuTG8pKaCePuXXxn6kSw2Y/5gqji/lr4ytbJW9OK/L2ifl/QOeXCk9mklHgQSJjut+3T+uYhMK8nq98GK1XPeYMrEp9q+bFcNz6frI220jebvtOpjL7Bf5/Sm4ZXRykyyQSfP04TGcrfs3J9Za2NeCQdOzvVmzMKqCCOrt+fTJfLbmsXOflE57jrzbG365SbiwRgmtlY2kiCsJ7fhwJlPH4iKYnyzaPHLWCy2wGmbyx2hy+Si6cHTg5GJ9TtfvvdmFmkOcqfkPPqRt7JId9Ab27nNSeKXNVtGh0kT/MIb6HhAVhNefr2aquCsnutTrKU1obXS5nf9j/Aa0UdDfXPhYWAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Whisper App"\n        title=""\n        src="/static/graph1-2d8e31f310dccd55ea659dd99ce1b37e-f96c0.png"\n        srcset="/static/graph1-2d8e31f310dccd55ea659dd99ce1b37e-f96c0.png 240w"\n        sizes="(max-width: 240px) 100vw, 240px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I led a team of 6 students at Ecole polytechnique to investigate these rumour source detection algorithms. We designed several algorithms of our own and built a web interface (Whisper App) to allow the interactive execution of algorithms from the literature in addition to ours.</p>\n<p><a href="http://temigo.pythonanywhere.com/#/">Try Whisper App online!</a> -\n<a href="https://github.com/Temigo/whisper-app">Back-end code</a> -\n<a href="https://github.com/Temigo/whisper-app-client">Front-end code</a> -\n<a href="https://github.com/Temigo/whisper">Algorithms implementations</a></p>',frontmatter:{title:"Projects",date:null,description:null}}},pathContext:{slug:"/projects"}}}});
//# sourceMappingURL=path---projects-2d6cc4e0486dba6d32bf.js.map