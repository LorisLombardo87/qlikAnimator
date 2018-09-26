# Qlik Animator
> Animate your qlik dashboard

## Purpose and Description
Qlik Animator brings life to your dashbord, just choose a field and press play. 
The extension will select each value in the given field after a certain amount of time animating the dashboard.

## Screenshots

<img src = "https://github.com/LorisLombardo87/qlikAnimator/raw/master/asset/img/demo.gif" />

## Installation

1. Download the latest version from [here](https://github.com/LorisLombardo87/qlikAnimator/raw/master/build/qlikAnimator_latest.zip) 
2. Qlik Sense Desktop
	* To install, copy all files in the .zip file to folder "C:\Users\[%Username%]\Documents\Qlik\Sense\Extensions\QlikAnimator"
3. Qlik Sense Server
	* See instructions [how to import an extension on Qlik Sense Server](http://help.qlik.com/sense/en-us/developer/#../Subsystems/Workbench/Content/BuildingExtensions/HowTos/deploy-extensions.htm)

## Configuration

Add the field you want to cicle over, remember to adjust the sorting properties of that field.
Use any field you  like, it work well with calendar's fields but you can animate over the dimension you want!

You can also configure the time, in milli seconds, between each selection. the default value is 3000 ms.


## Contributing
Contributing to this project is welcome. The process to do so is outlined below:

1. Create a fork of the project
2. Work on whatever bug or feature you wish
3. Create a pull request (PR)

I cannot guarantee that I will merge all PRs but I will evaluate them all.

## Author

**Loris Lombardo**

## Change Log

See [CHANGELOG](CHANGELOG.yml)

## License & Copyright
The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).

See [Additional license information for this solution.](LICENSE.md)




