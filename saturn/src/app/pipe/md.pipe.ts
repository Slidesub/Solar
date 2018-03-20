import { Pipe, PipeTransform } from '@angular/core';
import * as MarkdownIt from 'markdown-it';
import * as hljs from 'highlight.js';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'md'
})
export class MdPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, args?: any): any {
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs"><code>' +
                   hljs.highlight(lang, str, true).value +
                   '</code></pre>';
          } catch (__) {}
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
    });
    const out = md.render(value);
    return this.sanitizer.bypassSecurityTrustHtml(out);
  }

}
