import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss'],
})
export class ModalExampleComponent implements OnInit {

  name: string;
  public data = [];
  private itemCount = 50;

  constructor(private modalCtrl: ModalController, private pickerCtrl: PickerController) {}

  ngOnInit(): void {
    this.prepareData();
}

trackFn(index: number, item: string) {
  return `${item}-${index}`;
}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
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
