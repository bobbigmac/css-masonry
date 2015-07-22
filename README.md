# CSS-Masonry

Very simple css-only masonry layout using css3's `column-count` and `column-gap`. Doesn't rely on fixed heights, intended to work with Meteor/Blaze.

Responsive and increases column-count at Bootstrap breakpoint dimensions, though will work just fine without Bootstrap.

I use this layout in a lot of projects so this is basically just a starting-point and something to refer to, override with your desired margins/column-counts as needed. Check the source, it's not fancy.

CSS columns are pretty well supported: http://caniuse.com/#feat=multicolumn

## Usage

```
<div class="masonry-wall">
	<div class="masonry-brick">
		<h1>Some big content<br /><br/>More stuff</h2>
	</div>
	<div class="masonry-brick">
		<h6>Some <small>not as big</small> content</h6>
	</div>
	<!-- etc -->
</div>
```
or to be a bit more bootstrappy...
```
<div class="masonry-wall">
	{{#each someThingsHavePictures}}
		<div class="masonry-brick">
			<div class="panel panel-default">
				<h2 class="panel-heading">{{this.name}}</h2>
				{{#if this.img}}
					<div class="panel-body">
						<img class="panel-image" src="{{this.img" />
					</div>
				{{/if}}
			</div>
		</div>
	{{/each}}
</div>
```

## Thanks

Based entirely on http://w3bits.com/css-masonry/