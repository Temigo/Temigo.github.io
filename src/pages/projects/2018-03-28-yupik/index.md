---
title: Yup'ik Eskimo and Machine Translation for Low-Resource Polysynthetic Languages
date: '2018-03-28'
layout: project
path: "/projects/yupik"
draft: false
frontImage: "./yupik.jpg"
description: "Won 1st prize (based on the reports) for the final project of CS224n - Natural Language Processing with Deep Learning. Machine translation tools do not yet exist for the Yup'ik Eskimo language which is an endangered language spoken by around 8,000 people in Southwest Alaska."
---

*Jan. 2018 - Jan. 2019, with Christopher W. Liu*

Won 1st prize (based on the reports) for the course project of [CS224n - Natural Language Processing with Deep Learning](http://cs224n.stanford.edu).

Machine translation tools do not yet exist for the Yup'ik Eskimo language. It is an endangered language spoken by around 8,000 people who primarily live in Southwest Alaska. We created a dataset of Yup'ik Eskimo / English parallel text (~100k sentences) and developed a pipeline for reliable translation of this language pair.

We wrote a morphological rule-based parser for the Yup'ik Eskimo language and compared it with other unsupervised tokenization methods. We trained a bidirectional LSTM model with attention and reached a BLEU score of 13 using Byte-Pair Encoding, an unsupervised tokenization method.

![Students](./yupik.jpg)
*Yup'ik names of children  (Marc Lester / ADN)*

We developed and launched in October 2018 __[Yugtun](http://www.yugtun.com)__, a language and dictionary tool for Yup'ik Eskimo which is available online to help revitalize the language.



[Final Report](http://web.stanford.edu/class/cs224n/reports/6907893.pdf) /
[Machine Translation Code](https://github.com/cwtliu/yupik-mt) /
[Yuarcuun API Code](https://github.com/Temigo/yuarcuun-api) /
[Yuarcuun Web interface](https://github.com/Temigo/yuarcuun-web)

<blockquote class="twitter-tweet" data-lang="en-gb"><p lang="en" dir="ltr">Byte pair encodings as good as morphological analysis based on Morfessor for low resource machine translation on Yup&#39;ik Eskimo to English. <a href="https://t.co/hdauwgEQUG">pic.twitter.com/hdauwgEQUG</a></p>&mdash; Richard (@RichardSocher) <a href="https://twitter.com/RichardSocher/status/976647886099263488?ref_src=twsrc%5Etfw">22 March 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
