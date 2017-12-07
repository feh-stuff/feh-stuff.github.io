$.widget('custom.selectable', {
  options: {
    defaultText: '',
    class: 'btn-outline-secondary btn-block text-left',
    maxHeight: 300,
    selectOptions: [],
    searchable: true,
    optionGenerator: function(item, $parent) {
      $(`<div class="dropdown-item">${item.name}</div>`)
          .data('val', item)
          .appendTo($parent);
    },
    disabled: false,
    header: '',
    onSelect: function ($opt, $this) {
      $this.find('.btn').html($opt.html());
      $this.data('val', $opt.data('val'));
    }
  },

  _create: function() {
    this.$button = $(`<button class="btn ${this.options.class} dropdown-toggle" type="button" data-toggle="dropdown" ${this.options.disabled ? "disabled": ""}>${this.options.defaultText}</button>`);
    this.$menu = $(`<div class="dropdown-menu"></div>`);
    this.$searchContainer = $(`<div class="dropdown-search pl-2 pr-2 mb-2"><input class="form-control search"></div>`);
    this.$menuItems = $(`<div style="max-height:${this.options.maxHeight}px;overflow-y:scroll;"></div>`);

    if (this.options.searchable) {
      this.$menu.append(this.$searchContainer);
    }

    if (this.options.header.length) {
      this.$menu.append(this.options.header);
    }

    this.$menu.append(this.$menuItems);
    this._makeOptions();

    if (this.options.defaultValue) {
      $(this.element).data('val', this.options.defaultValue);
    }

    this.$menuItems.on('click', '.dropdown-item', function(event) {
      let $opt = $(event.currentTarget);
      this.options.onSelect($opt, $(this.element));
      $(this.element).trigger('select');
    }.bind(this));

    this.$searchContainer.on('keyup', '.search', this._search.bind(this));

    this.element.append(this.$button).append(this.$menu);
    return this;
  },

  _makeOptions: function() {
    this.$menuItems.empty();
    for (let i = 0; i < this.options.selectOptions.length; i++) {
      this.options.optionGenerator(this.options.selectOptions[i], this.$menuItems);
    }
  },

  _search: function(event) {
    let searchVal = $(event.currentTarget).val().trim().toLowerCase();
    this.$menuItems.children().each(function() {
      if (searchVal.length === 0) {
        $(this).removeClass('d-none');
      } else if ($(this).hasClass('.dropdown-header')) {
        $(this).addClass('d-none');
      } else {
        let val = $(this).text().toLowerCase();
        $(this).toggleClass('d-none', !$(this).text().toLowerCase().includes(searchVal));
      }
    });
  },

  selectOptions: function(opts) {
    this.clear();
    this.enable();
    this.options.selectOptions = opts;
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
    this.options.selectOptions = [];
    this.$button.text(this.options.defaultText);
    return this;
  }
});
