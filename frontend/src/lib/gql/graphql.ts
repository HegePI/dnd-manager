/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A high precision floating point value represented as a string */
	BigFloat: { input: string; output: string };
	/** An arbitrary size integer represented as a string */
	BigInt: { input: string; output: string };
	/** An opaque string using for tracking a position in results during pagination */
	Cursor: { input: any; output: any };
	/** A date without time information */
	Date: { input: string; output: string };
	/** A date and time */
	Datetime: { input: string; output: string };
	/** A Javascript Object Notation value serialized as a string */
	JSON: { input: string; output: string };
	/** Any type not handled by the type system */
	Opaque: { input: any; output: any };
	/** A time without date information */
	Time: { input: string; output: string };
	/** A universally unique identifier */
	UUID: { input: string; output: string };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
	eq?: InputMaybe<Scalars['BigFloat']['input']>;
	gt?: InputMaybe<Scalars['BigFloat']['input']>;
	gte?: InputMaybe<Scalars['BigFloat']['input']>;
	in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars['BigFloat']['input']>;
	lte?: InputMaybe<Scalars['BigFloat']['input']>;
	neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
	containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
	contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
	eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
	eq?: InputMaybe<Scalars['BigInt']['input']>;
	gt?: InputMaybe<Scalars['BigInt']['input']>;
	gte?: InputMaybe<Scalars['BigInt']['input']>;
	in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars['BigInt']['input']>;
	lte?: InputMaybe<Scalars['BigInt']['input']>;
	neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
	containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
	contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
	eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
	eq?: InputMaybe<Scalars['Boolean']['input']>;
	is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
	containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
	contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
	eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export type Characters = Node & {
	__typename?: 'Characters';
	createdAt: Scalars['Datetime']['output'];
	deletedAt?: Maybe<Scalars['Datetime']['output']>;
	id: Scalars['UUID']['output'];
	name: Scalars['String']['output'];
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output'];
	updatedAt: Scalars['Datetime']['output'];
	userId: Scalars['UUID']['output'];
};

export type CharactersConnection = {
	__typename?: 'CharactersConnection';
	edges: Array<CharactersEdge>;
	pageInfo: PageInfo;
};

export type CharactersDeleteResponse = {
	__typename?: 'CharactersDeleteResponse';
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output'];
	/** Array of records impacted by the mutation */
	records: Array<Characters>;
};

export type CharactersEdge = {
	__typename?: 'CharactersEdge';
	cursor: Scalars['String']['output'];
	node: Characters;
};

export type CharactersFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<CharactersFilter>>;
	createdAt?: InputMaybe<DatetimeFilter>;
	deletedAt?: InputMaybe<DatetimeFilter>;
	id?: InputMaybe<UuidFilter>;
	name?: InputMaybe<StringFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<CharactersFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<CharactersFilter>>;
	updatedAt?: InputMaybe<DatetimeFilter>;
	userId?: InputMaybe<UuidFilter>;
};

export type CharactersInsertInput = {
	createdAt?: InputMaybe<Scalars['Datetime']['input']>;
	deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
	id?: InputMaybe<Scalars['UUID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
	userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CharactersInsertResponse = {
	__typename?: 'CharactersInsertResponse';
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output'];
	/** Array of records impacted by the mutation */
	records: Array<Characters>;
};

export type CharactersOrderBy = {
	createdAt?: InputMaybe<OrderByDirection>;
	deletedAt?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	name?: InputMaybe<OrderByDirection>;
	updatedAt?: InputMaybe<OrderByDirection>;
	userId?: InputMaybe<OrderByDirection>;
};

export type CharactersUpdateInput = {
	createdAt?: InputMaybe<Scalars['Datetime']['input']>;
	deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
	id?: InputMaybe<Scalars['UUID']['input']>;
	name?: InputMaybe<Scalars['String']['input']>;
	updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
	userId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CharactersUpdateResponse = {
	__typename?: 'CharactersUpdateResponse';
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output'];
	/** Array of records impacted by the mutation */
	records: Array<Characters>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
	eq?: InputMaybe<Scalars['Date']['input']>;
	gt?: InputMaybe<Scalars['Date']['input']>;
	gte?: InputMaybe<Scalars['Date']['input']>;
	in?: InputMaybe<Array<Scalars['Date']['input']>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars['Date']['input']>;
	lte?: InputMaybe<Scalars['Date']['input']>;
	neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
	containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
	contains?: InputMaybe<Array<Scalars['Date']['input']>>;
	eq?: InputMaybe<Array<Scalars['Date']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
	eq?: InputMaybe<Scalars['Datetime']['input']>;
	gt?: InputMaybe<Scalars['Datetime']['input']>;
	gte?: InputMaybe<Scalars['Datetime']['input']>;
	in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars['Datetime']['input']>;
	lte?: InputMaybe<Scalars['Datetime']['input']>;
	neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
	containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
	contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
	eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
	NotNull = 'NOT_NULL',
	Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
	eq?: InputMaybe<Scalars['Float']['input']>;
	gt?: InputMaybe<Scalars['Float']['input']>;
	gte?: InputMaybe<Scalars['Float']['input']>;
	in?: InputMaybe<Array<Scalars['Float']['input']>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars['Float']['input']>;
	lte?: InputMaybe<Scalars['Float']['input']>;
	neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
	containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
	contains?: InputMaybe<Array<Scalars['Float']['input']>>;
	eq?: InputMaybe<Array<Scalars['Float']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
	eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
	eq?: InputMaybe<Scalars['Int']['input']>;
	gt?: InputMaybe<Scalars['Int']['input']>;
	gte?: InputMaybe<Scalars['Int']['input']>;
	in?: InputMaybe<Array<Scalars['Int']['input']>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars['Int']['input']>;
	lte?: InputMaybe<Scalars['Int']['input']>;
	neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
	containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
	contains?: InputMaybe<Array<Scalars['Int']['input']>>;
	eq?: InputMaybe<Array<Scalars['Int']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
	__typename?: 'Mutation';
	/** Deletes zero or more records from the `Characters` collection */
	deleteFromCharactersCollection: CharactersDeleteResponse;
	/** Deletes zero or more records from the `Pgmigrations` collection */
	deleteFromPgmigrationsCollection: PgmigrationsDeleteResponse;
	graphql?: Maybe<Scalars['JSON']['output']>;
	/** Adds one or more `Characters` records to the collection */
	insertIntoCharactersCollection?: Maybe<CharactersInsertResponse>;
	/** Adds one or more `Pgmigrations` records to the collection */
	insertIntoPgmigrationsCollection?: Maybe<PgmigrationsInsertResponse>;
	/** Updates zero or more records in the `Characters` collection */
	updateCharactersCollection: CharactersUpdateResponse;
	/** Updates zero or more records in the `Pgmigrations` collection */
	updatePgmigrationsCollection: PgmigrationsUpdateResponse;
	uuidGenerateV1?: Maybe<Scalars['UUID']['output']>;
	uuidGenerateV1mc?: Maybe<Scalars['UUID']['output']>;
	uuidGenerateV4?: Maybe<Scalars['UUID']['output']>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromCharactersCollectionArgs = {
	atMost?: Scalars['Int']['input'];
	filter?: InputMaybe<CharactersFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromPgmigrationsCollectionArgs = {
	atMost?: Scalars['Int']['input'];
	filter?: InputMaybe<PgmigrationsFilter>;
};

/** The root type for creating and mutating data */
export type MutationGraphqlArgs = {
	extensions?: InputMaybe<Scalars['JSON']['input']>;
	operationName?: InputMaybe<Scalars['String']['input']>;
	query?: InputMaybe<Scalars['String']['input']>;
	variables?: InputMaybe<Scalars['JSON']['input']>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoCharactersCollectionArgs = {
	objects: Array<CharactersInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoPgmigrationsCollectionArgs = {
	objects: Array<PgmigrationsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateCharactersCollectionArgs = {
	atMost?: Scalars['Int']['input'];
	filter?: InputMaybe<CharactersFilter>;
	set: CharactersUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatePgmigrationsCollectionArgs = {
	atMost?: Scalars['Int']['input'];
	filter?: InputMaybe<PgmigrationsFilter>;
	set: PgmigrationsUpdateInput;
};

export type Node = {
	/** Retrieves a record by `ID` */
	nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
	eq?: InputMaybe<Scalars['Opaque']['input']>;
	is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
	/** Ascending order, nulls first */
	AscNullsFirst = 'AscNullsFirst',
	/** Ascending order, nulls last */
	AscNullsLast = 'AscNullsLast',
	/** Descending order, nulls first */
	DescNullsFirst = 'DescNullsFirst',
	/** Descending order, nulls last */
	DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
	__typename?: 'PageInfo';
	endCursor?: Maybe<Scalars['String']['output']>;
	hasNextPage: Scalars['Boolean']['output'];
	hasPreviousPage: Scalars['Boolean']['output'];
	startCursor?: Maybe<Scalars['String']['output']>;
};

export type Pgmigrations = Node & {
	__typename?: 'Pgmigrations';
	id: Scalars['Int']['output'];
	name: Scalars['String']['output'];
	/** Globally Unique Record Identifier */
	nodeId: Scalars['ID']['output'];
	runOn: Scalars['Datetime']['output'];
};

export type PgmigrationsConnection = {
	__typename?: 'PgmigrationsConnection';
	edges: Array<PgmigrationsEdge>;
	pageInfo: PageInfo;
};

export type PgmigrationsDeleteResponse = {
	__typename?: 'PgmigrationsDeleteResponse';
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output'];
	/** Array of records impacted by the mutation */
	records: Array<Pgmigrations>;
};

export type PgmigrationsEdge = {
	__typename?: 'PgmigrationsEdge';
	cursor: Scalars['String']['output'];
	node: Pgmigrations;
};

export type PgmigrationsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<PgmigrationsFilter>>;
	id?: InputMaybe<IntFilter>;
	name?: InputMaybe<StringFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<PgmigrationsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<PgmigrationsFilter>>;
	runOn?: InputMaybe<DatetimeFilter>;
};

export type PgmigrationsInsertInput = {
	name?: InputMaybe<Scalars['String']['input']>;
	runOn?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PgmigrationsInsertResponse = {
	__typename?: 'PgmigrationsInsertResponse';
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output'];
	/** Array of records impacted by the mutation */
	records: Array<Pgmigrations>;
};

export type PgmigrationsOrderBy = {
	id?: InputMaybe<OrderByDirection>;
	name?: InputMaybe<OrderByDirection>;
	runOn?: InputMaybe<OrderByDirection>;
};

export type PgmigrationsUpdateInput = {
	name?: InputMaybe<Scalars['String']['input']>;
	runOn?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PgmigrationsUpdateResponse = {
	__typename?: 'PgmigrationsUpdateResponse';
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars['Int']['output'];
	/** Array of records impacted by the mutation */
	records: Array<Pgmigrations>;
};

/** The root type for querying data */
export type Query = {
	__typename?: 'Query';
	/** A pagable collection of type `Characters` */
	charactersCollection?: Maybe<CharactersConnection>;
	/** Retrieve a record by its `ID` */
	node?: Maybe<Node>;
	/** A pagable collection of type `Pgmigrations` */
	pgmigrationsCollection?: Maybe<PgmigrationsConnection>;
	uuidGenerateV3?: Maybe<Scalars['UUID']['output']>;
	uuidGenerateV5?: Maybe<Scalars['UUID']['output']>;
	uuidNil?: Maybe<Scalars['UUID']['output']>;
	uuidNsDns?: Maybe<Scalars['UUID']['output']>;
	uuidNsOid?: Maybe<Scalars['UUID']['output']>;
	uuidNsUrl?: Maybe<Scalars['UUID']['output']>;
	uuidNsX500?: Maybe<Scalars['UUID']['output']>;
};

/** The root type for querying data */
export type QueryCharactersCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>;
	before?: InputMaybe<Scalars['Cursor']['input']>;
	filter?: InputMaybe<CharactersFilter>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Array<CharactersOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
	nodeId: Scalars['ID']['input'];
};

/** The root type for querying data */
export type QueryPgmigrationsCollectionArgs = {
	after?: InputMaybe<Scalars['Cursor']['input']>;
	before?: InputMaybe<Scalars['Cursor']['input']>;
	filter?: InputMaybe<PgmigrationsFilter>;
	first?: InputMaybe<Scalars['Int']['input']>;
	last?: InputMaybe<Scalars['Int']['input']>;
	offset?: InputMaybe<Scalars['Int']['input']>;
	orderBy?: InputMaybe<Array<PgmigrationsOrderBy>>;
};

/** The root type for querying data */
export type QueryUuidGenerateV3Args = {
	name: Scalars['String']['input'];
	namespace: Scalars['UUID']['input'];
};

/** The root type for querying data */
export type QueryUuidGenerateV5Args = {
	name: Scalars['String']['input'];
	namespace: Scalars['UUID']['input'];
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
	eq?: InputMaybe<Scalars['String']['input']>;
	gt?: InputMaybe<Scalars['String']['input']>;
	gte?: InputMaybe<Scalars['String']['input']>;
	ilike?: InputMaybe<Scalars['String']['input']>;
	in?: InputMaybe<Array<Scalars['String']['input']>>;
	iregex?: InputMaybe<Scalars['String']['input']>;
	is?: InputMaybe<FilterIs>;
	like?: InputMaybe<Scalars['String']['input']>;
	lt?: InputMaybe<Scalars['String']['input']>;
	lte?: InputMaybe<Scalars['String']['input']>;
	neq?: InputMaybe<Scalars['String']['input']>;
	regex?: InputMaybe<Scalars['String']['input']>;
	startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
	containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
	contains?: InputMaybe<Array<Scalars['String']['input']>>;
	eq?: InputMaybe<Array<Scalars['String']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
	eq?: InputMaybe<Scalars['Time']['input']>;
	gt?: InputMaybe<Scalars['Time']['input']>;
	gte?: InputMaybe<Scalars['Time']['input']>;
	in?: InputMaybe<Array<Scalars['Time']['input']>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars['Time']['input']>;
	lte?: InputMaybe<Scalars['Time']['input']>;
	neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
	containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
	contains?: InputMaybe<Array<Scalars['Time']['input']>>;
	eq?: InputMaybe<Array<Scalars['Time']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
	eq?: InputMaybe<Scalars['UUID']['input']>;
	in?: InputMaybe<Array<Scalars['UUID']['input']>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
	containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
	contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
	eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
	is?: InputMaybe<FilterIs>;
	overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type GetCharactersQueryVariables = Exact<{ [key: string]: never }>;

export type GetCharactersQuery = {
	__typename: 'Query';
	charactersCollection?: {
		__typename: 'CharactersConnection';
		pageInfo: { __typename: 'PageInfo'; hasNextPage: boolean };
		edges: Array<{
			__typename: 'CharactersEdge';
			node: { __typename: 'Characters'; userId: string; name: string; createdAt: string };
		}>;
	} | null;
};

export const GetCharactersDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'getCharacters' },
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'charactersCollection' },
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: '__typename' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'pageInfo' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: '__typename' }
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'hasNextPage' }
											}
										]
									}
								},
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'edges' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{
												kind: 'Field',
												name: { kind: 'Name', value: '__typename' }
											},
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'node' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: '__typename'
															}
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'userId' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'name' }
														},
														{
															kind: 'Field',
															name: {
																kind: 'Name',
																value: 'createdAt'
															}
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<GetCharactersQuery, GetCharactersQueryVariables>;
