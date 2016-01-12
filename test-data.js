var _ = require('underscore');

module.exports.VALID_CSV = 'id,name,age\n1,John,33\n7,Jane,25';

module.exports.VALID_TABLE_SCHEMA = {
  'fields': [
    {'name': 'id', 'type': 'integer', 'title': '', 'description': '', 'format': 'default'},
    {'name': 'name', 'type': 'string', 'title': '', 'description': '', 'format': 'default'},
    {'name': 'age', 'type': 'integer', 'title': '', 'description': '', 'format': 'default'}
  ]
};

module.exports.CKAN_V3_ENDPOINT_RESPONSE = {
  'help': 'Return the metadata of a dataset (package) and its resources.\n\n    :param id: the id or name of the dataset\n    :type id: string\n\n    :rtype: dictionary\n\n    ',
  'success': true,

  'result': {
    'license_title': 'Creative Commons Attribution Share-Alike',
    'maintainer': '',
    'relationships_as_object': [],
    'private': false,
    'maintainer_email': '',
    'revision_timestamp': '2015-06-11T05:45:07.202244',
    'id': '028191c1-84a6-4ac0-ba03-3f51d635a092',
    'metadata_created': '2015-06-04T09:01:09.193345',
    'owner_org': 'cc5fa135-5b0d-4fac-85c2-83c57120e337',
    'metadata_modified': '2015-06-11T05:45:07.202244',
    'author': 'Arnold',
    'author_email': 'opendata@cio.gov.bh',
    'state': 'active',
    'version': null,
    'license_id': 'cc-by-sa',
    'type': 'dataset',

    'resources': [
      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-11T05:44:34.090355',
        'webstore_last_updated': null,
        'id': '37cfafa9-3bc0-4ea4-b61d-da42b3cc471f',
        'size': null,
        'state': 'active',
        'hash': '123',
        'description': '',
        'format': 'text/csv',
        'tracking_summary': {'total': 0, 'recent': 0},
        'mimetype_inner': null,
        'mimetype': 'null',
        'cache_url': null,
        'name': 'Central Informatics Organisation',
        'created': '2015-06-04T09:11:20.451894',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender.csv',
        'webstore_url': null,
        'last_modified': null,
        'position': 0,
        'revision_id': '22367e53-fd9b-47b2-987b-bf9e9718e739',
        'resource_type': 'file'
      },

      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-04T09:11:24.892428',
        'webstore_last_updated': null,
        'id': '0f95c63e-5e4d-4f6d-b18e-adde7ec1e01c',
        'size': null,
        'state': 'active',
        'hash': '321',
        'description': '',
        'format': 'text/csv',
        'tracking_summary': {'total': 0, 'recent': 0},
        'mimetype_inner': null,
        'mimetype': null,
        'cache_url': null,
        'name': null,
        'created': '2015-06-04T09:11:25.017302',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender-3.csv',
        'webstore_url': null,
        'last_modified': null,
        'position': 1,
        'revision_id': '41366b22-27eb-49c9-90f7-0a71e9a9c8a2',
        'resource_type': 'file.upload',
        'schema': module.exports.VALID_TABLE_SCHEMA
      },

      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-04T09:12:34.344421',
        'webstore_last_updated': null,
        'id': 'f277b69b-45a6-4455-b2e1-f597d3788865',
        'size': null,
        'state': 'active',
        'hash': '111',
        'description': '',
        'format': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'tracking_summary': {'total': 0, 'recent': 0},'mimetype_inner': null,
        'mimetype': null,
        'cache_url': null,
        'name': null,
        'created': '2015-06-04T09:12:34.433542',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
        'webstore_url': null,
        'last_modified': null,
        'position': 2, 'revision_id': '22e49b1c-12df-4b2f-9ce5-efc5bf2e5585',
        'resource_type': 'file.upload'
      }
    ],

    'num_resources': 3,

    'tags': [
      {
        'vocabulary_id': null,
        'display_name': 'Age group',
        'name': 'Age group',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': 'db09f7e2-cf33-4afd-8da5-881a17659381'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Bahrain',
        'name': 'Bahrain',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '8d56d49f-7db9-4520-9dff-eb8374416aeb'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Constituency',
        'name': 'Constituency',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '0f75a899-944c-47c0-b018-918f614c1913'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Gender',
        'name': 'Gender',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '3539ff61-98ae-4775-acaf-b6d859da0f0a'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Governorate',
        'name': 'Governorate',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': 'c06210a5-48c8-4a3a-b4b7-aa52be47adb4'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Population',
        'name': 'Population',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '6dbc1e33-c612-40a8-872f-a49d941e2470'
      }
    ],

    'tracking_summary': {'total': 0, 'recent': 0},
    'groups': [],
    'relationships_as_subject': [],
    'num_tags': 6,
    'name': 'population-number-by-governorate-age-group-and-gender-2010-2014',
    'isopen': true,
    'url': 'http://ckan.com/example/url',
    'notes': 'Total Population of Bahrain by Governorate, Age group, Gender and Constituency 2010 - 2014 ',
    'title': 'Population Number by Governorate, Age group and Gender 2010 - 2014',
    'extras': [],
    'license_url': 'http://www.opendefinition.org/licenses/cc-by-sa',

    'organization': {
      'description': 'Bahrain Open Data',
      'title': 'Bahrain Open Data',
      'created': '2013-04-22T23:48:15.876166',
      'approval_status': 'approved',
      'revision_timestamp': '2013-04-23T04:48:15.823352',
      'is_organization': true, 'state': 'active',
      'image_url': 'http://www.data.gov.bh/wps/themes/html/OpenData/en/images/mainlogo.gif',
      'revision_id': 'd7727ba0-5141-413a-a17b-9af95483c76b',
      'type': 'organization',
      'id': 'cc5fa135-5b0d-4fac-85c2-83c57120e337',
      'name': 'bahrain-open-data'
    },

    'revision_id': '5bc16e4e-7ae5-4ded-8ca4-bc79f7532485'
  }
};

module.exports.CKAN_V3_ENDPOINT_RESPONSE_mapping = {
  'help': 'Return the metadata of a dataset (package) and its resources.\n\n    :param id: the id or name of the dataset\n    :type id: string\n\n    :rtype: dictionary\n\n    ',
  'success': true,

  'result': {
    'license_title': 'Creative Commons Attribution Share-Alike',
    'maintainer': '',
    'relationships_as_object': [],
    'private': false,
    'maintainer_email': '',
    'revision_timestamp': '2015-06-11T05:45:07.202244',
    'id': '028191c1-84a6-4ac0-ba03-3f51d635a092',
    'metadata_created': '2015-06-04T09:01:09.193345',
    'owner_org': 'cc5fa135-5b0d-4fac-85c2-83c57120e337',
    'metadata_modified': '2015-06-11T05:45:07.202244',
    'author': 'Arnold',
    'author_email': 'opendata@cio.gov.bh',
    'state': 'active',
    'version': null,
    'license_id': 'cc-by-sa',
    'type': 'dataset',

    'resources': [
      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-11T05:44:34.090355',
        'webstore_last_updated': null,
        'id': '37cfafa9-3bc0-4ea4-b61d-da42b3cc471f',
        'size': null,
        'state': 'active',
        'hash': '123',
        'description': '',
        'format': 'csv',
        'tracking_summary': {'total': 0, 'recent': 0},
        'mimetype_inner': null,
        'mimetype': 'null',
        'cache_url': null,
        'name': 'Central Informatics Organisation',
        'created': '2015-06-04T09:11:20.451894',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender.csv',
        'webstore_url': null,
        'last_modified': null,
        'position': 0,
        'revision_id': '22367e53-fd9b-47b2-987b-bf9e9718e739',
        'resource_type': 'file'
      },

      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-04T09:11:24.892428',
        'webstore_last_updated': null,
        'id': '0f95c63e-5e4d-4f6d-b18e-adde7ec1e01c',
        'size': null,
        'state': 'active',
        'hash': '321',
        'description': '',
        'format': 'csv',
        'tracking_summary': {'total': 0, 'recent': 0},
        'mimetype_inner': null,
        'mimetype': null,
        'cache_url': null,
        'name': null,
        'created': '2015-06-04T09:11:25.017302',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender-3.csv',
        'webstore_url': null,
        'last_modified': null,
        'position': 1,
        'revision_id': '41366b22-27eb-49c9-90f7-0a71e9a9c8a2',
        'resource_type': 'file.upload',
        'schema': module.exports.VALID_TABLE_SCHEMA
      },

      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-04T09:12:34.344421',
        'webstore_last_updated': null,
        'id': 'f277b69b-45a6-4455-b2e1-f597d3788865',
        'size': null,
        'state': 'active',
        'hash': '111',
        'description': '',
        'format': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'tracking_summary': {'total': 0, 'recent': 0},'mimetype_inner': null,
        'mimetype': null,
        'cache_url': null,
        'name': null,
        'created': '2015-06-04T09:12:34.433542',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
        'webstore_url': null,
        'last_modified': null,
        'position': 2, 'revision_id': '22e49b1c-12df-4b2f-9ce5-efc5bf2e5585',
        'resource_type': 'file.upload'
      },

      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-04T09:12:34.344421',
        'webstore_last_updated': null,
        'id': 'f277b69b-45a6-4455-b2e1-f597d3788865',
        'size': null,
        'state': 'active',
        'hash': 'SHA1:1234567890123456789012345678901234567890',
        'description': '',
        'format': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'tracking_summary': {'total': 0, 'recent': 0},'mimetype_inner': null,
        'mimetype': null,
        'cache_url': null,
        'name': null,
        'created': '2015-06-04T09:12:34.433542',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
        'webstore_url': null,
        'last_modified': null,
        'position': 2, 'revision_id': '22e49b1c-12df-4b2f-9ce5-efc5bf2e5585',
        'resource_type': 'file.upload'
      }

    ],

    'num_resources': 3,

    'tags': [
      {
        'vocabulary_id': null,
        'display_name': 'Age group',
        'name': 'Age group',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': 'db09f7e2-cf33-4afd-8da5-881a17659381'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Bahrain',
        'name': 'Bahrain',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '8d56d49f-7db9-4520-9dff-eb8374416aeb'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Constituency',
        'name': 'Constituency',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '0f75a899-944c-47c0-b018-918f614c1913'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Gender',
        'name': 'Gender',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '3539ff61-98ae-4775-acaf-b6d859da0f0a'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Governorate',
        'name': 'Governorate',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': 'c06210a5-48c8-4a3a-b4b7-aa52be47adb4'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Population',
        'name': 'Population',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '6dbc1e33-c612-40a8-872f-a49d941e2470'
      }
    ],

    'tracking_summary': {'total': 0, 'recent': 0},
    'groups': [],
    'relationships_as_subject': [],
    'num_tags': 6,
    'name': 'population-number-by-governorate-age-group-and-gender-2010-2014',
    'isopen': true,
    'url': 'http://ckan.com/example/url',
    'notes': 'Total Population of Bahrain by Governorate, Age group, Gender and Constituency 2010 - 2014 ',
    'title': 'Population Number by Governorate, Age group and Gender 2010 - 2014',
    'extras': [],
    'license_url': 'http://www.opendefinition.org/licenses/cc-by-sa',

    'organization': {
      'description': 'Bahrain Open Data',
      'title': 'Bahrain Open Data',
      'created': '2013-04-22T23:48:15.876166',
      'approval_status': 'approved',
      'revision_timestamp': '2013-04-23T04:48:15.823352',
      'is_organization': true, 'state': 'active',
      'image_url': 'http://www.data.gov.bh/wps/themes/html/OpenData/en/images/mainlogo.gif',
      'revision_id': 'd7727ba0-5141-413a-a17b-9af95483c76b',
      'type': 'organization',
      'id': 'cc5fa135-5b0d-4fac-85c2-83c57120e337',
      'name': 'bahrain-open-data'
    },

    'revision_id': '5bc16e4e-7ae5-4ded-8ca4-bc79f7532485'
  }
};

module.exports.DKAN_V3_ENDPOINT_RESPONSE = {
  'help': 'Return the metadata of a dataset (package) and its resources.\n\n    :param id: the id or name of the dataset\n    :type id: string\n\n    :rtype: dictionary\n\n    ',
  'success': true,

  'result': [{
    'license_title': 'Creative Commons Attribution Share-Alike',
    'maintainer': '',
    'relationships_as_object': [],
    'private': false,
    'maintainer_email': '',
    'revision_timestamp': '2015-06-11T05:45:07.202244',
    'id': '028191c1-84a6-4ac0-ba03-3f51d635a092',
    'metadata_created': '2015-06-04T09:01:09.193345',
    'owner_org': 'cc5fa135-5b0d-4fac-85c2-83c57120e337',
    'metadata_modified': '2015-06-11T05:45:07.202244',
    'author': 'Arnold',
    'author_email': 'opendata@cio.gov.bh',
    'state': 'active',
    'license_title': 'Some title',
    'type': 'dataset',

    'resources': [
      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-11T05:44:34.090355',
        'webstore_last_updated': null,
        'id': '37cfafa9-3bc0-4ea4-b61d-da42b3cc471f',
        'size': null,
        'state': 'active',
        'hash': '123',
        'description': '',
        'format': 'text/csv',
        'tracking_summary': {'total': 0, 'recent': 0},
        'mimetype_inner': null,
        'mimetype': 'null',
        'cache_url': null,
        'name': 'Central Informatics Organisation',
        'created': '2015-06-04T09:11:20.451894',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender.csv',
        'webstore_url': null,
        'last_modified': null,
        'position': 0,
        'revision_id': '22367e53-fd9b-47b2-987b-bf9e9718e739',
        'resource_type': 'file'
      },

      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-04T09:11:24.892428',
        'webstore_last_updated': null,
        'id': '0f95c63e-5e4d-4f6d-b18e-adde7ec1e01c',
        'size': null,
        'state': 'active',
        'hash': '321',
        'description': '',
        'format': 'text/csv',
        'tracking_summary': {'total': 0, 'recent': 0},
        'mimetype_inner': null,
        'mimetype': null,
        'cache_url': null,
        'name': null,
        'created': '2015-06-04T09:11:25.017302',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender-3.csv',
        'webstore_url': null,
        'last_modified': null,
        'position': 1,
        'revision_id': '41366b22-27eb-49c9-90f7-0a71e9a9c8a2',
        'resource_type': 'file.upload',
        'schema': module.exports.VALID_TABLE_SCHEMA
      },

      {
        'resource_group_id': '646fbfd1-5853-4173-9f21-3909aed7bcaa',
        'cache_last_updated': null,
        'revision_timestamp': '2015-06-04T09:12:34.344421',
        'webstore_last_updated': null,
        'id': 'f277b69b-45a6-4455-b2e1-f597d3788865',
        'size': null,
        'state': 'active',
        'hash': '111',
        'description': '',
        'format': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'tracking_summary': {'total': 0, 'recent': 0},'mimetype_inner': null,
        'mimetype': null,
        'cache_url': null,
        'name': null,
        'created': '2015-06-04T09:12:34.433542',
        'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
        'webstore_url': null,
        'last_modified': null,
        'position': 2, 'revision_id': '22e49b1c-12df-4b2f-9ce5-efc5bf2e5585',
        'resource_type': 'file.upload'
      }
    ],

    'num_resources': 3,

    'tags': [
      {
        'vocabulary_id': null,
        'display_name': 'Age group',
        'name': 'Age group',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': 'db09f7e2-cf33-4afd-8da5-881a17659381'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Bahrain',
        'name': 'Bahrain',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '8d56d49f-7db9-4520-9dff-eb8374416aeb'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Constituency',
        'name': 'Constituency',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '0f75a899-944c-47c0-b018-918f614c1913'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Gender',
        'name': 'Gender',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '3539ff61-98ae-4775-acaf-b6d859da0f0a'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Governorate',
        'name': 'Governorate',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': 'c06210a5-48c8-4a3a-b4b7-aa52be47adb4'
      },

      {
        'vocabulary_id': null,
        'display_name': 'Population',
        'name': 'Population',
        'revision_timestamp': '2015-06-04T09:01:09.193345',
        'state': 'active',
        'id': '6dbc1e33-c612-40a8-872f-a49d941e2470'
      }
    ],

    'tracking_summary': {'total': 0, 'recent': 0},
    'groups': [],
    'relationships_as_subject': [],
    'num_tags': 6,
    'name': 'population-number-by-governorate-age-group-and-gender-2010-2014',
    'isopen': true,
    'url': 'http://dkan.com/example/url',
    'description': 'DKAN description',
    'title': 'Population Number by Governorate, Age group and Gender 2010 - 2014',
    'extras': [],
    'license_url': 'http://www.opendefinition.org/licenses/cc-by-sa',

    'organization': {
      'description': 'Bahrain Open Data',
      'title': 'Bahrain Open Data',
      'created': '2013-04-22T23:48:15.876166',
      'approval_status': 'approved',
      'revision_timestamp': '2013-04-23T04:48:15.823352',
      'is_organization': true, 'state': 'active',
      'image_url': 'http://www.data.gov.bh/wps/themes/html/OpenData/en/images/mainlogo.gif',
      'revision_id': 'd7727ba0-5141-413a-a17b-9af95483c76b',
      'type': 'organization',
      'id': 'cc5fa135-5b0d-4fac-85c2-83c57120e337',
      'name': 'bahrain-open-data'
    },

    'revision_id': '5bc16e4e-7ae5-4ded-8ca4-bc79f7532485'
  }]
};

module.exports.CKAN_V3_BASE_DATAPACKAGE = {
  'name': 'population-number-by-governorate-age-group-and-gender-2010-2014',
  'title': 'Population Number by Governorate, Age group and Gender 2010 - 2014',
  'description': 'Total Population of Bahrain by Governorate, Age group, Gender and Constituency 2010 - 2014 ',
  'homepage': 'http://ckan.com/example/url',
  'version': null,

  'licences': [
    {'id': 'cc-by-sa', 'url': 'http://www.opendefinition.org/licenses/cc-by-sa'}
  ],

  'author': 'Arnold opendata@cio.gov.bh',
  'contributors': [],

  'resources': [
    {
      'name': 'central-informatics-organisation',
      'title': 'Central Informatics Organisation',
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender.csv',
      'mediatype': 'text/csv',
      format: 'text/csv',
      'hash': '123',
      'schema': module.exports.VALID_TABLE_SCHEMA
    },

    {
      'name': null,
      'title': null,
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender-3.csv',
      'mediatype': 'text/csv',
      format: 'text/csv',
      'hash': '321',
      'schema': module.exports.VALID_TABLE_SCHEMA
    },

    {
      'name': null,
      'title': null,
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
      'mediatype': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      format: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'hash': '111'
    }
  ],

  'keywords': ['Age group', 'Bahrain', 'Constituency', 'Gender', 'Governorate', 'Population'],
  'sources': [],
  'image': '',
  'base': '',
  'dataDependencies': {}
};

module.exports.DKAN_V3_BASE_DATAPACKAGE = {
  'name': 'population-number-by-governorate-age-group-and-gender-2010-2014',
  'title': 'Population Number by Governorate, Age group and Gender 2010 - 2014',
  'description': 'DKAN description',
  'homepage': 'http://dkan.com/example/url',
  'version': null,

  'licences': [
    {'id': null, 'url': 'http://www.opendefinition.org/licenses/cc-by-sa'}
  ],

  'author': 'Arnold opendata@cio.gov.bh',
  'contributors': [],

  'resources': [
    {
      'name': 'central-informatics-organisation',
      'title': 'Central Informatics Organisation',
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender.csv',
      'mediatype': 'text/csv',
      'format': 'text/csv',
      'hash': '123',
      'schema': module.exports.VALID_TABLE_SCHEMA
    },

    {
      'name': null,
      'title': null,
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender-3.csv',
      'mediatype': 'text/csv',
      'format': 'text/csv',
      'hash': '321',
      'schema': module.exports.VALID_TABLE_SCHEMA
    },

    {
      'name': null,
      'title': null,
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
      'mediatype': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'format': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'hash': '111'
    }
  ],

  'keywords': ['Age group', 'Bahrain', 'Constituency', 'Gender', 'Governorate', 'Population'],
  'sources': [],
  'image': '',
  'base': '',
  'dataDependencies': {}
};

module.exports.TEST_DATAPACKAGE_RESULT  = {
  'name': 'population-number-by-governorate-age-group-and-gender-2010-2014',
  'title': 'Population Number by Governorate, Age group and Gender 2010 - 2014',
  'description': 'Total Population of Bahrain by Governorate, Age group, Gender and Constituency 2010 - 2014 ',
  'homepage': 'http://ckan.com/example/url',
  'version': null,

  'licences': [
    {'id': 'cc-by-sa', 'url': 'http://www.opendefinition.org/licenses/cc-by-sa'}
  ],

  'author': 'Arnold opendata@cio.gov.bh',
  'contributors': [],

  'resources': [
    {
      'name': 'central-informatics-organisation',
      'title': 'Central Informatics Organisation',
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender.csv',
      'mediatype': 'text/csv',
      format: 'csv',
      'hash': '123',
      'schema': module.exports.VALID_TABLE_SCHEMA
    },

    {
      'name': null,
      'title': null,
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:12:06.147Z/populationnumber-by-governorates-age-group-gender-3.csv',
      'mediatype': 'text/csv',
      format: 'csv',
      'hash': '321',
      'schema': module.exports.VALID_TABLE_SCHEMA
    },

    {
      'name': null,
      'title': null,
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
      'mediatype': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      format: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'hash': '111'
    },

    {
      'name': null,
      'title': null,
      'url': 'https://ckannet-storage.commondatastorage.googleapis.com/2015-06-04T09:13:26.344Z/populationnumber-by-governorates-age-group-gender-5.xlsx',
      'mediatype': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      format: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'hash': 'SHA1:1234567890123456789012345678901234567890'
    }
  ],

  'keywords': ['Age group', 'Bahrain', 'Constituency', 'Gender', 'Governorate', 'Population'],
  'sources': [],
  'image': '',
  'base': '',
  'dataDependencies': {}
};
