import { Injectable } from '@angular/core';
import { Colis } from '../types/colis';

@Injectable()
export class ColisService {

  colisList: Colis[] = [
    {
      address: "248-7407 Bibendum. Av.",
      email: "a@icloud.net",
      id: "D1AB7E3C-5D23-D646-4375-9B7872B52289",
      details: "cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin",
      deliveryPersonId: 8
    },
    {
      address: "3475 Nascetur Rd.",
      email: "cras.pellentesque@yahoo.org",
      id: "C9CE1525-59A7-577D-EE9E-B29065C0EB63",
      details: "ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat",
      deliveryPersonId: 1
    },
    {
      address: "6638 Sem Street",
      email: "ornare.placerat.orci@icloud.net",
      id: "394DDD7E-E252-2DE4-9BF3-A2D0BC41C469",
      details: "auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis",
      deliveryPersonId: 5
    },
    {
      address: "P.O. Box 283, 3500 Et Ave",
      email: "senectus.et.netus@yahoo.com",
      id: "3F87BC6E-81DE-71AF-945C-9072CE383E75",
      details: "imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit,",
      deliveryPersonId: 9
    },
    {
      address: "569-5240 Suspendisse Rd.",
      email: "phasellus.dapibus@aol.org",
      id: "642749CA-04E5-49CC-97E0-590D81873892",
      details: "vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim.",
      deliveryPersonId: 7
    }
  ]

  getColisById(id: string) {
    return this.colisList.find(colis => colis.id === id)
  }

}
