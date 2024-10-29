import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Контент')
    .items([
      // Главный раздел "Новостройки"
      S.listItem()
        .title('Новостройки')
        .child(
          S.list()
            .title('Новостройки')
            .items([
              S.documentTypeListItem('rooms').title('Количество Комнат(создать перед "Жилой комплекс")'),
              S.documentTypeListItem('district').title('Район (создать перед "Жилой комплекс")'),
              S.documentTypeListItem('completionTime').title('Срок Завершения (создать перед "Жилой комплекс")'),
              S.documentTypeListItem('housingType').title('Тип Жилья (создать перед "Жилой комплекс")'),
              S.documentTypeListItem('conditions').title('Условия покупки(внутренняя страница новостройки)'),
              S.documentTypeListItem('infrastructure').title('Инфраструктура района(внутрення страница новостройки)'),
              S.documentTypeListItem('residentialComplex').title('Жилой Комплекс'),
            ])
        ),
      S.divider(),

      // Главный раздел "Планировки" с вложенными пунктами
      S.listItem()
        .title('Планировки для новостроек')
        .child(
          S.list()
            .title('Планировки')
            .items([
              S.documentTypeListItem('floorFilter').title('Фильтр Этаж'),
              S.documentTypeListItem('roomsFilter').title('Фильтр Количество Комнат'),
              S.documentTypeListItem('layouts').title('Планировка'),
            ])
        ),
      S.divider(),

      S.listItem()
        .title('Главная страница(Слайдер 1)')
        .child(
          S.document()
            .schemaType('slider')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['rooms', 'district', 'completionTime', 'housingType', 'residentialComplex', 'floorFilter', 'roomsFilter', 'layouts', 'slider', 'conditions', 'infrastructure'].includes(item.getId()!),
      ),
    ]);
