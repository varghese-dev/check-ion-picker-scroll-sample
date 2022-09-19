import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public data = [];
  private itemCount = 50;

  constructor(private pickerCtrl: PickerController) {}

  ngOnInit(): void {
      this.prepareData();
  }

  trackFn(index: number, item: string) {
    return `${item}-${index}`;
  }

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'languages',
          options: [
            {
              text: 'JavaScript',
              value: 'javascript',
            },
            {
              text: 'TypeScript',
              value: 'typescript',
            },
            {
              text: 'Rust',
              value: 'rust',
            },
            {
              text: 'C#',
              value: 'c#',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(`You selected: ${value.languages.value}`);
          },
        },
      ],
    });

    await picker.present();
  }

  private prepareData() {
    for (let i = 0; i <= this.itemCount; i++) {
      this.data.push(`Item ${i}`);
    }
  }

}
