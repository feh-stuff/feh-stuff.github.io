$.widget('custom.selectable', {
  options: {
    text: 'Text',
    data: [],
    disabled: '',
    btnClass: '',
    menuClass: '',
    maxHeight: 300,
    header: '',
    search: true,
    value: null,
    optionGenerator: function(item, $parent, highlight) {
      $(`<div class="dropdown-item ${highlight.includes(item.name) ? 'opt-highlight' : ''}">${item.name}</div>`)
          .data('val', item)
          .appendTo($parent);
    },
    onSelect: function($opt, $this, event) {
      $this.find('.btn').html($opt.html());
      $this.data('val', $opt.data('val'));
    }
  },

  _create: function() {
    this.$button = $(`<button class="btn btn-block btn-outline-secondary text-left text-dark ${this.options.btnClass} dropdown-toggle"
        type="button" data-toggle="dropdown" ${this.options.disabled}>${this.options.text}</button>`);
    this.$menu = $(`<div class="dropdown-menu ${this.options.menuClass}"></div>`);
    this.searchContainer = $(`<div class="dropdown-search pl-2 pr-2 mb-2"><input class="form-control search"></div>`);
    this.$menuItems = $(`<div style="max-height:${this.options.maxHeight}px;overflow-y:auto;"></div>`);

    if (this.options.search) {
      this.$menu.append(this.$searchContainer);
    }
    this.$menu.append(this.options.header);
    this.$menu.append(this.$menuItems);
    this._makeOptions();
    if (this.options.defaultValue) {
      $(this.element).data('val', this.options.defaultValue);
    }

    this.$menuItems.on('click', '.dropdown-item', function(event) {
      let $opt = $(event.currentTarget);
      this.options.onSelect($opt, $(this.element), event);
      $(this.element).trigger('select');
    }.bind(this));
    //TODO: Bind Search Event

    this.element.append(this.$button).append(this.$menu);
    return this;
  },

  _makeOptions: function() {
    this.$menuItems.empty();
    for (let i = 0; i < this.options.data.length; i++) {
      this.options.optionGenerator(this.options.data[i], this.$menuItems, this.options.highlightList);
    }
  },

  text: function(text) {
    this.options.text = text;
    this.$button.html(text);
  }
});
