---
title: "Useful dom object attributes selector"
author: "Sheng Zhuang"
date: "01/11/2020"
stacks: "Javascript HTML CSS"
---

CSS selector is very useful in many places, like in jQuery, BeautifulSoup for dom manipulation and web scrapping.

CSS attribute selector not only can check if the element is with the attribute, but also can check if the element's attribute is with some string patterns. The sub-language for checking this is quite similar to Regex, and can also use flags for checking case-sensitivity like in Regex.

- has

  [attr]

- exact equal

  [attr="string"]

- start with

  [attr^="string"]

- end with

  [attr$="string"]

- contain word whitespace-separated

  [attr~="word"]

- contain substring

  [attr*="substring"]

- exact equal | left sustring of string separated by "-", "matched-notMatched"

  [attr|="string"]

- flag i for case-insensitively

  [attr="string" i]

- flag s for case-sensitively

  [attr="string" s]
