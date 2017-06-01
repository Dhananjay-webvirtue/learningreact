/**
 * Created by User on 5/24/2017.
 */
import Dispatcher from '../Dispatcher/carDispatcher';
import EventEmitter from 'events';

class CarStore extends EventEmitter {
    constructor() {
        super();
        this.cityList = [
            {cityId: 'C01',  cityName: "Delhi"},
            {cityId: 'C02',  cityName: "Gurgaon"},
            {cityId: 'C03',  cityName: "Noida"},
            {cityId: 'C04',  cityName: "Mumbai"},
            {cityId: 'C05',  cityName: "Patna"}
        ],
        this.carBrands = [
            {carBrandId: 'B01', carBrandName: "Maruti"},
            {carBrandId: 'B02', carBrandName: "BMW"},
            {carBrandId: 'B03', carBrandName: "Chevrolet"},
            {carBrandId: 'B04', carBrandName: "Datsun"},
            {carBrandId: 'B05', carBrandName: "Ford"}
        ],
        this.carModels = [
            {carModelId: 'M01', carModelName: "Alto"},
            {carModelId: 'M02', carModelName: "WagonR"},
            {carModelId: 'M03', carModelName: "Swift"},
            {carModelId: 'M04', carModelName: "Dezire"},
            {carModelId: 'M05', carModelName: "Breeza"}
        ],
        this.relationCityBrandModel = [
            {cityId: 'C01', carBrandId: 'B01', carModelId: 'M01'},
            {cityId: 'C01', carBrandId: 'B01', carModelId: 'M02'},
            {cityId: 'C01', carBrandId: 'B01', carModelId: 'M03'},
            {cityId: 'C01', carBrandId: 'B01', carModelId: 'M04'},
            {cityId: 'C01', carBrandId: 'B01', carModelId: 'M05'}
        ],

        this.fontFamilies = {
            "families": [
                "Arial",
                "Arial Black",
                "Calibri",
                "Georgia",
                "Helvetica",
                "Roboto",
                "Times",
                "Times New Roman",
                "Times Roman",
                "sans-serif",
            ]
        }

    }

    getCity() {
        return this.cityList;
    }

    getBrand() {
        return this.carBrands;
    }

    getModel() {
        return this.carModels;
    }

    getRelationCityBrandModel() {
        return this.relationCityBrandModel;
    }

    getallfontFamilies() {
        return this.fontFamilies;
}




}

var carStore = new CarStore;
//window.carlist = carStore;
/*dispatcher.register(carStore.handleAction.bind(carStore));*/
//window.dispatcher = dispatcher;

export default carStore;
