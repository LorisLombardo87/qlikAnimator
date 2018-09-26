define([
        'jquery',
        /*'underscore',*/
        'qlik',
        './properties',
        './initialproperties',
        './lib/js/extensionUtils',
        'text!./lib/css/style.css',
        'text!./lib/external/scoped-bootstrap.css',
        'text!./lib/partials/template.html',
],
function ($, /*_,*/ qlik, props, initProps, extensionUtils, cssContent, bootstrapCss, template) {
    'use strict';

    extensionUtils.addStyleToHeader(cssContent);
    extensionUtils.addStyleToHeader(bootstrapCss);


    // console.log('Initializing - remove me');

    return {

        definition: props,

        initialProperties: initProps,

        snapshot: { canTakeSnapshot: true },

        resize : function( /*$element, layout*/ ) {
            //do nothing
        },

		//clearSelectedValues : function($element) {
		//
		//},


        // Angular Support (uncomment to use)
        template: template,

        // Angular Controller
        controller: ['$scope','$timeout', function ($scope, $timeout) {

            console.log($scope.layout);

            $scope.step = -1;
            $scope.stepValue = '';

    		$scope.play = function () {

                $scope.list = $.extend(true, [], $scope.layout.qHyperCube.qDataPages[0].qMatrix);
                $scope.field = $scope.layout.qHyperCube.qDimensionInfo[0].qGroupFieldDefs[0];

                // console.log($scope.field, $scope.list);

                // console.log('play');
                $scope.step = -1;
                $scope.stepValue = '';
                playStep();
            }

            function playStep() {
                
                $scope.step++;

                if($scope.step<($scope.list.length)){

                    $scope.stepValue = $scope.list[$scope.step][0];

                    // console.log('play step', $scope.step);
                    // console.log('selecting', $scope.stepValue);

                    qlik.currApp(this).field($scope.field).clear();
                    qlik.currApp(this).field($scope.field).select([$scope.stepValue.qElemNumber], true, true);

                    $timeout(function(){playStep()}, $scope.layout.props.time);
                }
                else if($scope.step==($scope.list.length)){
                    
                    $timeout(function(){
                        $scope.step = -1;
                        // console.log('clear');
                        qlik.currApp(this).field($scope.field).clear();
                    }, 3000);
                }
            }
        }],


        paint: function ( $element /*, layout*/ ) {

            /*
            console.groupCollapsed('Basic Objects');
            console.info('$element:');
            // console.log($element);
            console.info('layout:');
            // console.log(layout);
            console.groupEnd();
            */

            // $element.empty();
            // var $helloWorld = $(document.createElement('div'));
            // $helloWorld.addClass('hello-world');
            // $helloWorld.html('Hello World from the extension "Qlik Animator"');
            // $element.append($helloWorld);

        }
    };

});
