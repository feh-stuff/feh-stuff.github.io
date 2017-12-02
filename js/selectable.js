$.widget('custom.selectable', {
  options: {
    defaultText: 'Select Options',
    class: 'btn-outline-secondary btn-block text-left',
    maxHeight: 500,
    selectOptions: [],
    searchable: false,
    optionGenerator: function(item, $parent) {
      $(`<div class="dropdown-item">${item.name}</div>`)
          .data('val', item)
          .appendTo($parent);
    }
  },

  _create: function() {
    this.$button = $(`<button class="btn ${this.options.class} dropdown-toggle" type="button" data-toggle="dropdown">${this.options.defaultText}</button>`);
    this.$menu = $('<div class="dropdown-menu" style="max-height:500px;overflow-y:scroll;"></div>');
    this._makeOptions();

    if (this.options.defaultValue) {
      $(this.element).data('val', this.options.defaultValue);
    }

    this.$menu.on('click', '.dropdown-item', function(event) {
      let $opt = $(event.currentTarget);
      this.$button.text($opt.text());
      $(this.element)
        .data('val', $opt.data('val'))
        .trigger('change');
    }.bind(this));

    this.element.append(this.$button).append(this.$menu);
    return this;
  },

  _makeOptions: function() {
    this.$menu.empty();
    for (let i = 0; i < this.options.selectOptions.length; i++) {
      this.options.optionGenerator(this.options.selectOptions[i], this.$menu);
    }
  },

  selectOptions: function(opts) {
    this.options.selectOptions = opts;
    this._makeOptions();
    this.$button.text(this.options.defaultText);
  }
});
