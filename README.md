# wappler_extensions_word_extractor

This repository is a simple use of the node.js package word-extractor to extract the content of a word document

# Requirements

place files in to the extensions/server_connect/modules directory
add the node package npm i word-extractor

restart the project

# use
select the path to the document in the key selector 

following this it will produce JSON output

- word._body
- word._annotations
- word._footers
- word._footnotes
- word._headers
- word._headerTextboxes
- word._textboxes


these can be used in code for additiona services

to do enable these as reference outputs 

