import { Component, Host, h } from '@stencil/core';
import { MyInterface } from '@interfaces/my-interface';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  myProperty: MyInterface = { myProperty: 'myValue' };

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
