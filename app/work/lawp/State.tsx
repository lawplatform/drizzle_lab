import { Color3, Vector3 } from "@babylonjs/core";
import { observable } from "@legendapp/state";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";


enableReactTracking({
	auto: true,
});


export const State$ = observable({
	fogColor: new Color3(0.4, 0.8, 1.0),
	title: 'office',
	fogSwitch: false,


})


//aqua : (0.4, 0.8, 1.0)

