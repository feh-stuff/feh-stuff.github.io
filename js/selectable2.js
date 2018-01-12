$.widget('custom.selectable', {
  options: {
    text: '',
    data: [],
    disabled: '',
    btnClass: '',
    menuClass: '',
    maxHeight: 300,
    header: '',
    search: true,
    value: null,
    searchPlaceholder: '',
    highlight: [],
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
    this.$searchContainer = $(`<div class="dropdown-search pl-2 pr-2 mb-2">
        <input class="form-control search" placeholder="${this.options.searchPlaceholder}"></div>`);
    this.$menuItems = $(`<div style="max-height:${this.options.maxHeight}px;overflow-y:auto;"></div>`);

    if (this.options.search) {
      this.$menu.append(this.$searchContainer);
    }

    this.$menu.append(this.options.header);
    this.$menu.append(this.$menuItems);
    this._makeOptions();
    if (this.options.value) {
      $(this.element).data('val', this.options.value);
    }

    this.$menuItems.on('click', '.dropdown-item', this._onClick.bind(this));
    this.$searchContainer.on('keyup', '.search', this._search.bind(this));

    this.element.append(this.$button).append(this.$menu);
    this.element.on('shown.bs.dropdown', function(event) {
      $(event.currentTarget).find('input.search').focus();
    });
    return this;
  },

  _makeOptions: function() {
    this.$menuItems.empty();
    for (let i = 0; i < this.options.data.length; i++) {
      this.options.optionGenerator(this.options.data[i], this.$menuItems, this.options.highlight);
    }
  },

  _onClick: function(event) {
    let $opt = $(event.currentTarget);
    this.options.onSelect($opt, $(this.element), event);
    $(this.element).trigger('select');
  },

  _search: function(event) {
    let searchVal = $(event.currentTarget).val().trim().toLowerCase();
    this.$menuItems.children().each(function() {
      let tokens = $(this).data('tokens');

      if (searchVal.length === 0) {
        $(this).removeClass('d-none');
        return;
      } 

      if ($(this).hasClass('dropdown-header')) {
        $(this).addClass('d-none');
        return;
      } 

      $(this).toggleClass('d-none', 
          !((tokens && tokens.length && tokens.includes(searchVal)) ||
          $(this).text().toLowerCase().includes(searchVal)));
    });
  },

  text: function(text) {
    this.options.text = text;
    this.$button.html(text);
  },

  data: function(opts) {
    this.clear()
        .enable()
        .options.data = opts;
    this._makeOptions();
    return this;
  },

  enable: function() {
    this.$button.removeAttr('disabled');
    return this;
  },

  disable: function() {
    this.$button.attr('disabled', 'disabled');
    return this;
  },

  clear: function() {
    this.options.data = [];
    this.$button.text(this.options.text);
    return this;
  },

  reset: function() {
    this.$button.text(this.options.text);
    $(this.element).data('val', this.options.value);
  }
});
