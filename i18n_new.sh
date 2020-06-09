#!/bin/bash

FETCHURL=https://locales.sky-tours.com/last/
LANGDIR=build/locales
TEMPDIR=locales_backup

if [ "`which unzip`" = "" ]; then
    echo "ERROR: 'unzip' not found" >&2
    exit 1
fi

OLDPWD=`pwd`
WORKDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $WORKDIR

source config/langpacks

for pack in "${LANGPACKS[@]}" ; do
    PACKNAME=${pack%%:*}
    HASH=${pack#*:}
    ZIPFILE=$TEMPDIR/$PACKNAME.zip
    TARGETTMPDIR=$LANGDIR/$PACKNAME.tmp
    TARGETDIR=$LANGDIR/$PACKNAME

    echo "Fetching $PACKNAME to $ZIPFILE"
    LASTTS=0
    if [ -d $TARGETDIR ]; then
        if [ `uname` = "Darwin" ]; then
            # MacOS stat
            LASTTS=`stat -f "%m" $TARGETDIR`
        else
            # Debian stat
            LASTTS=`stat -c "%Y" $TARGETDIR`
        fi
    fi
    curl -H "If-Modified-Since: $LASTTS" -f -s -o $ZIPFILE "$FETCHURL$HASH"
    if [ ! -f $ZIPFILE ]; then
        echo "  ATT: No data received"
        continue
    fi

    if [ -d $TARGETTMPDIR ]; then
        rm -rf $TARGETTMPDIR
    fi
    echo "  Unzipping to $TARGETTMPDIR"
    mkdir $TARGETTMPDIR
    unzip -q $ZIPFILE -d $TARGETTMPDIR
    if [ -d $TARGETDIR.bak ]; then
        rm -rf $TARGETDIR.bak
    fi
    if [ -d $TARGETDIR ]; then
        mv $TARGETDIR $TARGETDIR.bak
    fi
    mv $TARGETTMPDIR $TARGETDIR
    unlink $ZIPFILE
done

cd $OLDPWD
