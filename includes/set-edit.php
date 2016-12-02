<h1><?php echo empty( $set['id'] ) ? 'New fontsampler' : 'Edit fontsampler ' . $set['id'] ?></h1>
<p>Once you create the fontsampler, it will be saved with an ID you use to embed it on your wordpress pages</p>
<form method="post" enctype="multipart/form-data" action="?page=fontsampler" id="fontsampler-edit-sample">
	<input type="hidden" name="action" value="edit_set">
	<?php if ( function_exists( 'wp_nonce_field' ) ) : wp_nonce_field( 'fontsampler-action-edit_set' ); endif; ?>
	<?php if ( ! empty( $set['id'] ) ) : ?><input type="hidden" name="id"
	                                              value="<?php echo $set['id']; ?>"><?php endif; ?>

	<h2>Fonts</h2>

	<?php if ( ! empty ( $fonts ) ): ?>
		<p>Pick which font sets to use, or upload your fontsampler's fonts now:</p>
	<?php endif; ?>

	<input type="hidden" name="fonts_order" value="<?php if ( ! empty( $fonts_order ) ) : echo $fonts_order; endif; ?>">
	<ul id="fontsampler-fontset-list">
		<?php // looop through all pased in $set['fonts'] ?>
		<?php if ( ! empty( $set['id'] ) && ! empty( $set['fonts'] ) ) : foreach ( $set['fonts'] as $existing_font ) : ?>
			<li>
				<span class="fontsampler-fontset-sort-handle">&varr;</span>
				<select name="font_id[]">
					<option value="0">-pick from existing-</option>
					<?php // for each dropdown loop print out all fonts and if the current font is in the set, select it ?>
					<?php foreach ( $fonts as $font ) : ?>
						<option <?php if ( in_array( $existing_font['name'], $font ) ) : echo ' selected="selected"'; endif; ?>
							value="<?php echo $font['id']; ?>">
							<?php echo $font['name']; ?>
						</option>
					<?php endforeach; ?>
				</select>
				<button class="btn btn-small fontsampler-fontset-remove">&minus;</button>
				<div class="fontsampler-initial-font-selection">
					<input type="radio" name="initial_font" value="<?php echo $existing_font['id']; ?>"
						<?php if ( ! isset( $set['initial_font'] ) || $set['initial_font'] == $existing_font['id'] ) :
						echo 'checked="checked"'; ?>>
					<span class="fontsampler-initial-font selected">
							<span class="initial-font-selected">Is initially selected</span>
							<span class="initial-font-unselected">Set as initial</span>
						</span>
					<?php else : ?>
						><span class="fontsampler-initial-font">
							<span class="initial-font-selected">Is initially selected</span>
							<span class="initial-font-unselected">Set as initial</span>
						</span><?php endif; ?>
				</div>
			</li>
		<?php endforeach; ?>

		<?php elseif ( empty( $set['id'] ) && ! empty( $fonts ) ) : ?>
			<li>
				<!-- for a new fontset, display one, non-selected, select choice -->
				<span class="fontsampler-fontset-sort-handle">&varr;</span>
				<select name="font_id[]">
					<option value="0">-pick from existing-</option>
					<?php foreach ( $fonts as $font ) : ?>
						<option value="<?php echo $font['id']; ?>"><?php echo $font['name']; ?></option>
					<?php endforeach; ?>
				</select>
				<button class="btn btn-small fontsampler-fontset-remove"
				        title="Remove this fontset from sampler">&minus;</button>

				<div class="fontsampler-initial-font-selection">
					<input type="radio" name="initial_font" value="" checked="checked">
					<span class="fontsampler-initial-font selected">
						<span class="initial-font-selected">Is initially selected</span>
						<span class="initial-font-unselected">Set as initial</span>
					</span>
				</div>
			</li>
		<?php endif; ?>
	</ul>

	<?php if ( ! empty( $fonts ) ): ?>
		<p>
			<button class="btn btn-small fontsampler-fontset-add">+</button>
			<span>Add existing fontset</span>
		</p>
	<?php endif; ?>
	<p>
		<button class="btn btn-small fontsampler-fontset-create-inline">+</button>
		<span>Add new fontset and upload fonts</span>
	</p>

	<small>Picking multiple font set will enable the select field for switching between fonts used in the
		Fontsampler.
	</small>
	<br>
	<small>Use the arrow on the left to drag the order of the fonts. Use the minus on the right to remove fonts.</small>


	<h2>Interface options</h2>
	<h3>Initial text</h3>
	<div style="overflow: hidden;">
		<div class="fontsampler-admin-column-half">
			<label>
				<span>The initial text displayed in the font sampler, for example the font name or pangram. You can use multi-line text here as well.</span><br>
				<textarea name="initial" rows="5"
				          dir="<?php echo ( ! isset( $set['is_ltr'] ) || $set['is_ltr'] == "1" ) ? 'ltr' : 'rtl'; ?>"><?php if ( ! empty( $set['initial'] ) ) : echo $set['initial']; endif; ?></textarea>
			</label>
		</div>
		<div class="fontsampler-admin-column-half">
			<p>Fontsampler script direction is:</p>
			<label><input type="radio" name="is_ltr" value="1"
					<?php if ( empty( $set['is_ltr'] ) || $set['is_ltr'] == "1" ) : echo 'checked="checked"'; endif; ?>>
				<span>Left to Right</span></label>
			<label><input type="radio" name="is_ltr" value="0"
					<?php if ( isset( $set['is_ltr'] ) && $set['is_ltr'] == "0" ) : echo 'checked="checked"'; endif; ?>>
				<span>Right to Left</span></label>
		</div>
	</div>

	<div style="overflow: hidden;">
		<div class="fontsampler-options-checkbox">
			<fieldset>
				<legend>Common features</legend>

				<label>
					<input data-toggle-class="use-defaults" data-toggle-id="fontsampler-options-checkboxes" type="radio"
					       name="default_features" value="1"
						<?php if ( $set['default_features'] ): echo 'checked="checked"'; endif; ?>>
					<span>Use default features</span>
				</label>
				<label>
					<input data-toggle-class="use-defaults" data-toggle-id="fontsampler-options-checkboxes" type="radio"
					       name="default_features" value="0"
						<?php if ( ! $set['default_features'] ): echo 'checked="checked"'; endif; ?>>
					<span>Select custom features</span>
				</label>

				<div id="fontsampler-options-checkboxes"
				     class="<?php echo $set['default_features'] ? 'use-defaults' : ''; ?> ">
					<?php
					$options = $set;
					include( 'fontsampler-options.php' );
					?>
				</div>
			</fieldset>
		</div>


		<fieldset>
			<legend>Links</legend>
			<small>Leave the field empty to not include a buy or specimen button in the interface.</small>
			<label>
				<span class="input-description">"Buy" url for this fontsampler:</span>
				<input type="text" name="buy_url" class="fontsampler-admin-slider-label"
				       value="<?php echo $set['buy_url']; ?>"/>
			</label>
			<label>
				<span class="input-description">"Speciment" url for this fontsampler:</span>
				<input type="text" name="specimen_url" class="fontsampler-admin-slider-label"
				       value="<?php echo $set['specimen_url']; ?>"/>
			</label>
		</fieldset>
	</div>

	<h2>Interface layout</h2>

	<p>You can customize the layout of interface elements to differ from the defaults.</p>
	<div class="fontsampler-ui-preview">
		<input name="ui_order" type="hidden"
		       value="<?php if ( ! empty( $set['ui_order'] ) ) : echo $set['ui_order']; endif; ?>">

		<?php

		// use these labels to substitute nicer description texts to stand in for the input names
		$labels = array(
			'fontsampler'   => 'Text input',
			'size'          => 'Font size slider',
			'letterspacing' => 'Letterspacing slider',
			'lineheight'    => 'Lineheight slider',
			'fontpicker'    => 'Font selection<br><small>(more than one font in set)</small>',
			'sampletexts'   => 'Sample text selection',
			'options'       => 'Alignment, Invert &amp; OT',
		);

		// fix a possibly missing 'fontpicker' UI element to be included in the ui_order_parsed
		if ( isset( $set['fonts'] ) && sizeof( $set['fonts'] ) > 1 ) {

			// since there is more than one font, a fontpicker should be present, check if this is the case
			$fontpicker_present = false;
			foreach ( $set['ui_order_parsed'] as $row ) {
				if ( in_array( 'fontpicker', $row ) ) {
					$fontpicker_present = true;
					break;
				}
			}

			// loop through the ui_order_parsed array and insert fontpicker element first chance possible
			if ( ! $fontpicker_present ) {
				for ( $i = 0; $i < 3; $i ++ ) {

					// should the current ui_order_parsed be only with one or two subarrays, create a new "row"
					if ( ! isset( $set['ui_order_parsed'][ $i ] ) ) {
						$set['ui_order_parsed'][ $i ] = array();
					}
					$row = $set['ui_order_parsed'][ $i ];

					// push the fontpicker into the first possible match for:
					// - not a row with 3 elements
					// - not a row with the 3 column spanning fontsampler elements
					if ( sizeof( $row ) < 3 && ! isset( $row['fontsampler'] ) ) {
						array_push( $set['ui_order_parsed'][ $i ], 'fontpicker' );
						break;
					}
				}
			}
		}

		// keep track of what has already been rendered and what should get rendered invisibly (the rest) into the
		// placeholder
		$visible   = array();
		$invisible = array();

		for ( $r = 0; $r < 3; $r ++ ) : $row = isset( $set['ui_order_parsed'][ $r ] ) ? $set['ui_order_parsed'][ $r ] : null; ?>
			<ul class="fontsampler-ui-preview-list">
				<?php
				if ( $row and is_array( $row ) ) :
					foreach ( $row as $item ) : if ( ! empty( $item ) ) :
						?>
						<li class="fontsampler-ui-block <?php if ( 'fontsampler' == $item ) : echo 'fontsampler-ui-placeholder-full'; endif; ?>"
						    data-name="<?php echo $item; ?>"><?php echo $labels[ $item ]; ?></li>
						<?php array_push( $visible, $item ); ?>
						<?php
					endif; endforeach;
				endif;
				?>
			</ul>
		<?php endfor; ?>

		<ul class="fontsampler-ui-preview-placeholder">
			<?php
			$invisible = array_diff_key( $labels, array_flip( $visible ) );
			foreach ( $invisible as $key => $label ):
				?>
				<li class="fontsampler-ui-block" data-name="<?php echo $key; ?>"><?php echo $label; ?></li>
			<?php endforeach; ?>
		</ul>
	</div>
	<small>Only items you have selected above will be available for sorting in this preview.</small>
	<small>Below the elements in order of how they are displayed to the users of your site. <br>
		You can sort them by dragging and dropping.
	</small>
	<br>
	<?php submit_button(); ?>
</form>

<div class="fontsampler-admin-placeholders">
	<ul>
		<li id="fontsampler-admin-fontpicker-placeholder">
			<!-- for a new fontset, display one, non-selected, select choice -->
			<span class="fontsampler-fontset-sort-handle">&varr;</span>
			<select name="font_id[]">
				<option value="0">-pick from existing-</option>
				<?php foreach ( $fonts as $font ) : ?>
					<option value="<?php echo $font['id']; ?>"><?php echo $font['name']; ?></option>
				<?php endforeach; ?>
			</select>
			<button class="btn btn-small fontsampler-fontset-remove"
			        title="Remove this fontset from sampler">&minus;</button>

			<div class="fontsampler-initial-font-selection">
				<input type="radio" name="initial_font" value="">
				<span class="fontsampler-initial-font">
						<span class="initial-font-selected">Is initially selected</span>
						<span class="initial-font-unselected">Set as initial</span>
					</span>
			</div>
		</li>
		<li id="fontsampler-fontset-inline-placeholder" class="fontsampler-fontset-inline">
			<input class="inline_font_id" value="" type="hidden">
			<span class="fontsampler-fontset-sort-handle">&varr;</span>

			<div class="fontsampler-fontset-inline-wrapper">
				<?php
				unset( $font );
				include( 'fontset-fonts.php' );
				?>
				<small style="float: left;">Uploading at the very least a <code>woff</code> file is recommended.
					You can later edit the files of this fontset in the
					<a href="?page=fontsampler&subpage=fonts">Fonts &amp; Files</a> tab.
				</small>
			</div>
			<button class="btn btn-small fontsampler-fontset-remove"
			        title="Remove this fontset from sampler">&minus;</button>

			<div class="fontsampler-initial-font-selection">
				<input type="radio" name="initial_font" value="">
				<span class="fontsampler-initial-font">
						<span class="initial-font-selected">Is initially selected</span>
						<span class="initial-font-unselected">Set as initial</span>
					</span>
			</div>
		</li>
	</ul>
</div>
