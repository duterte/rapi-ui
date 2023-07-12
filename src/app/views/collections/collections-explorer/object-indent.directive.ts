import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';


class ObjectIndentContext {
  public appObjectIndent = 0;
}


@Directive({
  selector: '[appObjectIndent]'
})
export class ObjectIndentDirective implements OnInit {

  @Input('appObjectIndent')
  set indent(value: number | null) {
    this._indent = value ?? 0;
    this.context.appObjectIndent = this._indent
  }

  private _indent: number = 0;
  private context = new ObjectIndentContext()

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < this._indent; i++) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.context);
    }
  }

}
